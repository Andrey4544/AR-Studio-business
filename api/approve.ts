import crypto from 'crypto';

const APPROVE_SECRET = process.env.APPROVE_SECRET || 'ar-studio-secret-2026';
const GH_TOKEN = process.env.GH_TOKEN;
const GH_REPO = process.env.GH_REPO || 'Andrey4544/AR-Studio-business';

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { token, hmac } = req.query;

  if (!token || !hmac) {
    return res.status(400).send('<h1>Грешка: Липсващ токен</h1>');
  }

  // Verify HMAC
  const payload = Buffer.from(token, 'base64').toString('utf8');
  const expectedHmac = crypto.createHmac('sha256', APPROVE_SECRET).update(payload).digest('hex');

  if (hmac !== expectedHmac) {
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

    // 2. Add the new review
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
        <a href="https://ar-studio.site" style="color: #3b82f6; text-decoration: none;">← Към сайта</a>
      </div>
    `);
  } catch (error: any) {
    console.error('Approval error:', error);
    return res.status(500).send(`<h1>Грешка при одобряване: ${error.message}</h1>`);
  }
}
