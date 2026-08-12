import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const APPROVE_SECRET = process.env.APPROVE_SECRET || 'ar-studio-secret-2026';

const sendEmailNotification = async (subject: string, htmlContent: string) => {
  const smtpTo = process.env.SMTP_TO || 'abelev48@gmail.com';
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
  const smtpSecure = process.env.SMTP_SECURE !== 'false';

  if (!smtpUser || !smtpPass) {
    console.warn(`[SMTP Warning] Credentials missing.`);
    return { success: false, error: 'SMTP credentials missing on server.' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"AR Studio Reviews" <${smtpUser}>`,
      to: smtpTo,
      subject: subject,
      html: htmlContent,
    });

    return { success: true };
  } catch (error: any) {
    console.error('SMTP sending error:', error);
    return { success: false, error: error.message || 'SMTP failed' };
  }
};

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    try {
      const filePath = path.join(process.cwd(), 'reviews.json');
      const fileData = fs.readFileSync(filePath, 'utf8');
      const reviews = JSON.parse(fileData);
      return res.status(200).json(reviews.filter((r: any) => r.status === 'approved'));
    } catch (error) {
      return res.status(200).json([]);
    }
  }

  if (req.method === 'POST') {
    try {
      const { name, role, company, text, rating } = req.body;
      
      const newReview = {
        id: Date.now().toString(),
        name: String(name || 'Anonymous').trim(),
        role: String(role || 'Client').trim(),
        company: String(company || 'N/A').trim(),
        text: String(text || '').trim(),
        rating: Math.min(Math.max(parseInt(rating, 10) || 5, 1), 5),
        status: 'pending',
        timestamp: new Date().toISOString()
      };

      // Create approval token
      const payload = JSON.stringify(newReview);
      const hmac = crypto.createHmac('sha256', APPROVE_SECRET).update(payload).digest('hex');
      // Use base64url so the signed token is safe inside an email URL. Standard
      // base64 can contain "+", which mail clients and query parsers may turn into spaces.
      const token = Buffer.from(payload).toString('base64url');

      const forwardedProto = req.headers['x-forwarded-proto'];
      const protocol = Array.isArray(forwardedProto) ? forwardedProto[0] : forwardedProto || 'https';
      const host = req.headers['x-forwarded-host'] || req.headers['host'];
      const approveUrl = new URL('/api/approve', `${protocol}://${host}`);
      approveUrl.searchParams.set('token', token);
      approveUrl.searchParams.set('hmac', hmac);

      const stars = '⭐'.repeat(newReview.rating);
      const emailHtml = `
        <div style="font-family: sans-serif; background-color: #0c0a09; color: #e4e4e7; padding: 40px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #27272a;">
          <h2 style="color: #f59e0b; font-family: serif; border-bottom: 1px solid #27272a; padding-bottom: 12px; margin-top: 0;">🌟 НОВ ОТЗИВ ЗА ОДОБРЕНИЕ</h2>
          <p style="font-size: 14px; color: #a1a1aa; margin-bottom: 24px;">
            Получихте нов коментар от клиент. Натиснете бутона по-долу, за да го публикувате веднага.
          </p>
          <div style="background-color: #18181b; padding: 20px; border-radius: 6px; border: 1px solid #27272a; margin-bottom: 24px;">
            <p style="margin: 8px 0;"><strong>От:</strong> ${newReview.name} (${newReview.role} @ ${newReview.company})</p>
            <p style="margin: 8px 0;"><strong>Оценка:</strong> ${stars}</p>
            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #27272a; font-style: italic; color: #d4d4d8;">
              "${newReview.text}"
            </div>
          </div>
          <div style="text-align: center;">
            <a href="${approveUrl.toString()}" style="background-color: #3b82f6; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">ОДОБРИ И ПУБЛИКУВАЙ</a>
          </div>
          <p style="font-size: 12px; color: #71717a; text-align: center; margin-top: 24px;">
            Ако не искате да публикувате този отзив, просто игнорирайте това съобщение.
          </p>
        </div>
      `;

      const emailResult = await sendEmailNotification(`[AR Studio] Нов отзив от ${newReview.name}`, emailHtml);
      
      if (!emailResult.success) {
        return res.status(500).json({ status: 'error', message: 'Failed to send approval email', details: emailResult.error });
      }

      return res.status(200).json({ status: 'ok', message: 'Review submitted for approval' });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
