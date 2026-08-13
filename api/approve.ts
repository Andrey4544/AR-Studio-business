import crypto from 'crypto';

const APPROVE_SECRET = process.env.APPROVE_SECRET || 'ar-studio-secret-2026';
const GH_TOKEN = process.env.GH_TOKEN;
const GH_REPO = process.env.GH_REPO || 'Andrey4544/AR-Studio-business';

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const rawToken = Array.isArray(req.query.token) ? req.query.token[0] : req.query.token;
  const rawHmac = Array.isArray(req.query.hmac) ? req.query.hmac[0] : req.query.hmac;

  if (typeof rawToken !== 'string' || typeof rawHmac !== 'string') {
    return res.status(400).send('<h1>Грешка: Липсващ токен</h1>');
  }

  let payload: string;
  try {
    // New links use base64url. Replace spaces for backward compatibility with
    // older standard-base64 links whose "+" was converted by a query parser.
    const token = rawToken.replace(/ /g, '+');
    const decoded = Buffer.from(token, 'base64url');
    payload = decoded.toString('utf8');
    if (!payload || !JSON.parse(payload)) {
      throw new Error('Invalid token payload');
    }
  } catch {
    return res.status(403).send('<h1>Грешка: Невалиден токен</h1>');
  }

  const expectedHmac = crypto.createHmac('sha256', APPROVE_SECRET).update(payload).digest('hex');
  const providedHmac = Buffer.from(rawHmac, 'hex');
  const expectedHmacBuffer = Buffer.from(expectedHmac, 'hex');

  if (
    providedHmac.length !== expectedHmacBuffer.length ||
    !crypto.timingSafeEqual(providedHmac, expectedHmacBuffer)
  ) {
    return res.status(403).send('<h1>Грешка: Невалиден токен</h1>');
  }

  if (!GH_TOKEN) {
    return res.status(500).send('<h1>Грешка: Сървърът не е конфигуриран (GH_TOKEN липсва)</h1>');
  }

  try {
    const review = JSON.parse(payload);
    review.status = 'approved';

    // 1. Get current reviews.json from GitHub
    const getUrl = `https://api.github.com/repos/${GH_REPO}/contents/reviews.json`;
    const getRes = await fetch(getUrl, {
      headers: {
        'Authorization': `token ${GH_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!getRes.ok) {
      throw new Error(`Failed to fetch reviews.json: ${getRes.statusText}`);
    }

    const fileInfo = await getRes.json();
    const currentContent = Buffer.from(fileInfo.content, 'base64').toString('utf8');
    const reviews = JSON.parse(currentContent);

    // 2. An approval link may be opened more than once by a person, an email
    // client, or a security scanner. The signed review ID is stable, so it is
    // the idempotency key: the same review must never be appended twice.
    const alreadyApproved = reviews.some((existing: any) => existing?.id === review.id);
    if (alreadyApproved) {
      return res.status(200).send(`
        <div style="font-family: sans-serif; text-align: center; padding: 50px; background-color: #0c0a09; color: #e4e4e7; height: 100vh;">
          <h1 style="color: #10b981;">Отзивът вече е одобрен</h1>
          <p>Отзивът на <strong>${review.name}</strong> вече е публикуван. Не е добавен повторно.</p>
          <br>
          <a href="https://www.ar-studio.site/otzivy" style="color: #3b82f6; text-decoration: none;">← Към отзивите</a>
        </div>
      `);
    }

    reviews.push(review);
    const updatedContent = JSON.stringify(reviews, null, 2);

    // 3. Update reviews.json on GitHub
    const putRes = await fetch(getUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${GH_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Approve review from ${review.name}`,
        content: Buffer.from(updatedContent).toString('base64'),
        sha: fileInfo.sha
      })
    });

    if (!putRes.ok) {
      const errorData = await putRes.json();
      throw new Error(`Failed to update reviews.json: ${errorData.message}`);
    }

    return res.status(200).send(`
      <div style="font-family: sans-serif; text-align: center; padding: 50px; background-color: #0c0a09; color: #e4e4e7; height: 100vh;">
        <h1 style="color: #10b981;">✅ Отзивът е одобрен!</h1>
        <p>Благодарим ви! Отзивът на <strong>${review.name}</strong> беше добавен успешно.</p>
        <p>Сайтът ще се обнови автоматично след около 1-2 минути.</p>
        <br>
        <a href="https://www.ar-studio.site" style="color: #3b82f6; text-decoration: none;">← Към сайта</a>
      </div>
    `);
  } catch (error: any) {
    console.error('Approval error:', error);
    return res.status(500).send(`<h1>Грешка при одобряване: ${error.message}</h1>`);
  }
}
