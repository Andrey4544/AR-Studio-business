import nodemailer from 'nodemailer';

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
      from: `"AR Studio Submissions" <${smtpUser}>`,
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
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const data = req.body;

  try {
    const emailHtml = `
      <div style="font-family: sans-serif; background-color: #0c0a09; color: #e4e4e7; padding: 40px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #27272a;">
        <h2 style="color: #10b981; font-family: serif; border-bottom: 1px solid #27272a; padding-bottom: 12px; margin-top: 0;">🎯 Запитване за Бърза Оферта</h2>
        <div style="background-color: #18181b; padding: 20px; border-radius: 6px; border: 1px solid #27272a; margin-bottom: 20px;">
          <h3 style="margin-top: 0; color: #f4f4f5; font-size: 16px; border-bottom: 1px solid #27272a; padding-bottom: 8px;">👤 Клиентски данни:</h3>
          <p style="margin: 8px 0;"><strong>Име:</strong> ${data.name || 'Няма'}</p>
          <p style="margin: 8px 0;"><strong>Имейл:</strong> ${data.email || 'Няма'}</p>
          <p style="margin: 8px 0;"><strong>Телефон:</strong> ${data.phone || 'Няма'}</p>
        </div>
        <div style="background-color: #064e3b; border-left: 4px solid #10b981; padding: 12px; margin: 16px 0; border-radius: 4px; color: #a7f3d0;">
          <p style="margin: 4px 0;"><strong>Избран План:</strong> ${data.plan || 'standard'}</p>
        </div>
        <div style="background-color: #18181b; padding: 20px; border-radius: 6px; border: 1px solid #27272a;">
          <h3 style="margin-top: 0; color: #f4f4f5; font-size: 16px; border-bottom: 1px solid #27272a; padding-bottom: 8px;">💡 Описание:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6; color: #e4e4e7; margin: 8px 0;">${data.description || 'Няма предоставено описание'}</p>
        </div>
      </div>
    `;

    const subject = `[Бърза Оферта] ${data.name || 'Клиент'} - План: ${data.plan || 'standard'}`;
    const emailResult = await sendEmailNotification(subject, emailHtml);

    if (!emailResult.success) {
      return res.status(500).json({ status: 'error', message: 'Failed to send email', details: emailResult.error });
    }

    return res.status(200).json({ status: 'ok', message: 'Quote request sent successfully' });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
