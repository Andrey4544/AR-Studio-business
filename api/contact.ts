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

    const info = await transporter.sendMail({
      from: `"Luxury Dev Submissions" <${smtpUser}>`,
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
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const data = req.body;
  const path = req.url;

  try {
    if (path.includes('/api/quote') || (data.plan !== undefined && data.description !== undefined)) {
      // Logic for Quote Modal
      const emailHtml = `
        <div style="font-family: sans-serif; background-color: #0c0a09; color: #e4e4e7; padding: 40px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #27272a;">
          <h2 style="color: #10b981; font-family: serif; border-bottom: 1px solid #27272a; padding-bottom: 12px; margin-top: 0;">🎯 Запитване за Бърза Оферта</h2>
          <p style="font-size: 14px; color: #a1a1aa; text-transform: uppercase; font-family: monospace; margin-bottom: 24px;">
            Тип: <strong>Instant Custom Blueprint Request</strong>
          </p>
          
          <div style="background-color: #18181b; padding: 20px; border-radius: 6px; border: 1px solid #27272a; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #f4f4f5; font-size: 16px; border-bottom: 1px solid #27272a; padding-bottom: 8px;">👤 Клиентски данни / Contact:</h3>
            <p style="margin: 8px 0;"><strong>Име / Name:</strong> ${data.name || 'Няма'}</p>
            <p style="margin: 8px 0;"><strong>Имейл / Email:</strong> <a href="mailto:${data.email || ''}" style="color: #10b981; text-decoration: none;">${data.email || 'Няма'}</a></p>
            <p style="margin: 8px 0;"><strong>Телефон / Phone:</strong> <a href="tel:${data.phone || ''}" style="color: #10b981; text-decoration: none;">${data.phone || 'Няма'}</a></p>
          </div>

          <div style="background-color: #064e3b; border-left: 4px solid #10b981; padding: 12px; margin: 16px 0; border-radius: 4px; color: #a7f3d0;">
            <h3 style="margin: 0 0 8px 0; font-family: monospace;">💎 Избран План / Interest Profile:</h3>
            <p style="margin: 4px 0; text-transform: uppercase; font-weight: bold;">${data.plan || 'standard'}</p>
          </div>

          <div style="background-color: #18181b; padding: 20px; border-radius: 6px; border: 1px solid #27272a;">
            <h3 style="margin-top: 0; color: #f4f4f5; font-size: 16px; border-bottom: 1px solid #27272a; padding-bottom: 8px;">💡 Описание / Vision:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #e4e4e7; margin: 8px 0;">${data.description || 'Няма предоставено описание'}</p>
          </div>

          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #27272a; text-align: center; font-size: 11px; color: #71717a; font-family: monospace;">
            Разработено с луксозна архитектура в AI Studio • Преглед на запитванията
          </div>
        </div>
      `;

      const subject = `[Бърза Оферта] ${data.name || 'Клиент'} - План: ${data.plan || 'standard'}`;
      const emailResult = await sendEmailNotification(subject, emailHtml);

      return res.status(200).json({ status: 'ok', emailSent: emailResult.success, error: emailResult.error });
    } else {
      // Logic for Contact Form
      const isConsult = data.formType === 'consult';
      const formTypeLabel = isConsult ? 'Бърза консултация (Free Consultation)' : 'Запитване за Оферта (Quote Request)';
      
      let appointmentDetails = '';
      if (isConsult) {
        appointmentDetails = `
          <div style="background-color: #172554; border-left: 4px solid #3b82f6; padding: 12px; margin: 16px 0; border-radius: 4px; color: #93c5fd;">
            <h3 style="margin: 0 0 8px 0; font-family: monospace;">📅 Желано време за Консултация:</h3>
            <p style="margin: 4px 0;"><strong>Месец / Month:</strong> ${data.selectedMonth || 'Неизбран'}</p>
            <p style="margin: 4px 0;"><strong>Ден / Day:</strong> ${data.selectedDay || 'Неизбран'}</p>
            <p style="margin: 4px 0;"><strong>Часов слот / Slot:</strong> ${data.selectedTime || 'Неизбран'}</p>
          </div>
        `;
      }

      const emailHtml = `
        <div style="font-family: sans-serif; background-color: #0c0a09; color: #e4e4e7; padding: 40px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #27272a;">
          <h2 style="color: #3b82f6; font-family: serif; border-bottom: 1px solid #27272a; padding-bottom: 12px; margin-top: 0;">✨ Ново уеб запитване</h2>
          <p style="font-size: 14px; color: #a1a1aa; text-transform: uppercase; font-family: monospace; margin-bottom: 24px;">
            Тип: <strong>${formTypeLabel}</strong>
          </p>
          
          <div style="background-color: #18181b; padding: 20px; border-radius: 6px; border: 1px solid #27272a; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #f4f4f5; font-size: 16px; border-bottom: 1px solid #27272a; padding-bottom: 8px;">👤 Клиентски данни:</h3>
            <p style="margin: 8px 0;"><strong>Име / Name:</strong> ${data.formData?.name || 'Няма'}</p>
            <p style="margin: 8px 0;"><strong>Бизнес / Business:</strong> ${data.formData?.businessName || 'Няма'}</p>
            <p style="margin: 8px 0;"><strong>Имейл / Email:</strong> <a href="mailto:${data.formData?.email || ''}" style="color: #3b82f6; text-decoration: none;">${data.formData?.email || 'Няма'}</a></p>
            <p style="margin: 8px 0;"><strong>Телефон / Phone:</strong> <a href="tel:${data.formData?.phone || ''}" style="color: #3b82f6; text-decoration: none;">${data.formData?.phone || 'Няма'}</a></p>
          </div>

          ${appointmentDetails}

          <div style="background-color: #18181b; padding: 20px; border-radius: 6px; border: 1px solid #27272a;">
            <h3 style="margin-top: 0; color: #f4f4f5; font-size: 16px; border-bottom: 1px solid #27272a; padding-bottom: 8px;">💡 Описание на проекта:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #e4e4e7; margin: 8px 0;">${data.formData?.projectDescription || 'Няма предоставено описание'}</p>
          </div>

          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #27272a; text-align: center; font-size: 11px; color: #71717a; font-family: monospace;">
            Разработено с луксозна архитектура в AI Studio • Преглед на запитванията
          </div>
        </div>
      `;

      const subject = `[Ново Запитване] ${data.formData?.name || 'Клиент'} - ${formTypeLabel}`;
      const emailResult = await sendEmailNotification(subject, emailHtml);

      return res.status(200).json({ status: 'ok', emailSent: emailResult.success, error: emailResult.error });
    }
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
