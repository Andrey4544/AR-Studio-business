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
  // Разрешаваме Cross-Origin заявки, за да може фронтендът да комуникира свободно с бекенда
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
  // Проверяваме дали заявката идва от формата за оферта (Quote) или от стандартната форма
  const isQuoteForm = data.plan !== undefined || data.description !== undefined;

  try {
    if (!isQuoteForm) {
      // 1. ЛОГИКА ЗА СТАНДАРТНА КОНТАКТНА ФОРМА
      const isConsult = data.formType === 'consult';
      const formTypeLabel = isConsult ? 'Бърза консултация' : 'Запитване за Оферта';
      
      let appointmentDetails = '';
      if (isConsult) {
        appointmentDetails = `
          <div style="background-color: #172554; border-left: 4px solid #3b82f6; padding: 12px; margin: 16px 0; border-radius: 4px; color: #93c5fd;">
            <h3 style="margin: 0 0 8px 0;">📅 Желано време за Консултация:</h3>
            <p><strong>Месец:</strong> ${data.selectedMonth || 'Неизбран'}</p>
            <p><strong>Ден:</strong> ${data.selectedDay || 'Неизбран'}</p>
            <p><strong>Час:</strong> ${data.selectedTime || 'Неизбран'}</p>
          </div>
        `;
      }

      const emailHtml = `
        <div style="font-family: sans-serif; background-color: #0c0a09; color: #e4e4e7; padding: 40px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #27272a;">
          <h2 style="color: #3b82f6; border-bottom: 1px solid #27272a; padding-bottom: 12px; margin-top: 0;">✨ Ново уеб запитване</h2>
          <p>Тип: <strong>${formTypeLabel}</strong></p>
          <div style="background-color: #18181b; padding: 20px; border-radius: 6px; border: 1px solid #27272a; margin-bottom: 20px;">
            <h3>👤 Клиентски данни:</h3>
            <p><strong>Име:</strong> ${data.formData?.name || 'Няма'}</p>
            <p><strong>Бизнес:</strong> ${data.formData?.businessName || 'Няма'}</p>
            <p><strong>Имейл:</strong> ${data.formData?.email || 'Няма'}</p>
            <p><strong>Телефон:</strong> ${data.formData?.phone || 'Няма'}</p>
          </div>
          ${appointmentDetails}
          <div style="background-color: #18181b; padding: 20px; border-radius: 6px; border: 1px solid #27272a;">
            <h3>💡 Описание на проекта:</h3>
            <p style="white-space: pre-wrap;">${data.formData?.projectDescription || 'Няма описание'}</p>
          </div>
        </div>
      `;

      const subject = `[Ново Запитване] ${data.formData?.name || 'Клиент'} - ${formTypeLabel}`;
      const emailResult = await sendEmailNotification(subject, emailHtml);

      return res.status(200).json({ status: 'ok', emailSent: emailResult.success, error: emailResult.error });
    } else {
      // 2. ЛОГИКА ЗА ИЗСКАЧАЩИЯ ПРОЗОРЕЦ ЗА БЪРЗА ОФЕРТА (Quote Modal)
      const emailHtmlQuote = `
        <div style="font-family: sans-serif; background-color: #0c0a09; color: #e4e4e7; padding: 40px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #27272a;">
          <h2 style="color: #10b981; border-bottom: 1px solid #27272a; padding-bottom: 12px; margin-top: 0;">🎯 Запитване за Бърза Оферта</h2>
          <div style="background-color: #18181b; padding: 20px; border-radius: 6px; border: 1px solid #27272a; margin-bottom: 20px;">
            <h3>👤 Клиентски данни:</h3>
            <p><strong>Име:</strong> ${data.name || 'Няма'}</p>
            <p><strong>Имейл:</strong> ${data.email || 'Няма'}</p>
            <p><strong>Телефон:</strong> ${data.phone || 'Няма'}</p>
          </div>
          <div style="background-color: #064e3b; border-left: 4px solid #10b981; padding: 12px; margin: 16px 0; border-radius: 4px; color: #a7f3d0;">
            <h3>💎 Избран План:</h3>
            <p style="text-transform: uppercase; font-weight: bold;">${data.plan || 'standard'}</p>
          </div>
          <div style="background-color: #18181b; padding: 20px; border-radius: 6px; border: 1px solid #27272a;">
            <h3>💡 Описание:</h3>
            <p style="white-space: pre-wrap;">${data.description || 'Няма описание'}</p>
          </div>
        </div>
      `;

      const subjectQuote = `[Бърза Оферта] ${data.name || 'Клиент'} - План: ${data.plan || 'standard'}`;
      const emailResultQuote = await sendEmailNotification(subjectQuote, emailHtmlQuote);

      return res.status(200).json({ status: 'ok', emailSent: emailResultQuote.success, error: emailResultQuote.error });
    }
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
