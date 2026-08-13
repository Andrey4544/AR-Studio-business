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
    const isConsult = data.formType === 'consult';
    const isBrief = data.formType === 'brief';
    const formTypeLabel = isConsult ? 'Бърза консултация' : isBrief ? 'Кратък проектен бриф' : 'Запитване за оферта';
    
    let appointmentDetails = '';
    if (isConsult) {
      appointmentDetails = `
        <div style="background-color: #172554; border-left: 4px solid #3b82f6; padding: 12px; margin: 16px 0; border-radius: 4px; color: #93c5fd;">
          <h3 style="margin: 0 0 8px 0;">📅 Консултация:</h3>
          <p><strong>Дата:</strong> ${data.selectedDay} ${data.selectedMonth}</p>
          <p><strong>Час:</strong> ${data.selectedTime}</p>
        </div>
      `;
    }

    const emailHtml = `
      <div style="font-family: sans-serif; background-color: #0c0a09; color: #e4e4e7; padding: 40px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #27272a;">
        <h2 style="color: #3b82f6; border-bottom: 1px solid #27272a; padding-bottom: 12px; margin-top: 0;">✨ Ново запитване</h2>
        <p>Тип: <strong>${formTypeLabel}</strong></p>
        <div style="background-color: #18181b; padding: 20px; border-radius: 6px; border: 1px solid #27272a; margin-bottom: 20px;">
          <p><strong>Име:</strong> ${data.formData?.name || 'Няма'}</p>
          <p><strong>Бизнес:</strong> ${data.formData?.businessName || 'Няма'}</p>
          <p><strong>Имейл:</strong> ${data.formData?.email || 'Няма'}</p>
          <p><strong>Телефон:</strong> ${data.formData?.phone || 'Няма'}</p>
        </div>
        ${appointmentDetails}
        <div style="background-color: #18181b; padding: 20px; border-radius: 6px; border: 1px solid #27272a;">
          <p><strong>Описание:</strong> ${data.formData?.projectDescription || 'Няма'}</p>
        </div>
      </div>
    `;

    const subject = `[Запитване] ${data.formData?.name || 'Клиент'} - ${formTypeLabel}`;
    const emailResult = await sendEmailNotification(subject, emailHtml);

    if (!emailResult.success) {
      return res.status(500).json({ status: 'error', message: 'Failed to send email', details: emailResult.error });
    }

    return res.status(200).json({ status: 'ok', message: 'Message sent successfully' });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
