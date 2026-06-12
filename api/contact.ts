import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const sendEmailNotification = async (subject: string, htmlContent: string) => {
  const smtpTo = process.env.SMTP_TO || 'abelev48@gmail.com';
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
  const smtpSecure = process.env.SMTP_SECURE !== 'false';

  if (!smtpUser || !smtpPass) {
    console.warn(`[SMTP Warning] Credentials missing. Email not sent.`);
    return {
      success: false,
      error: 'SMTP credentials missing on server.',
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const info = await transporter.sendMail({
      from: `"Luxury Dev Submissions" <${smtpUser}>`,
      to: smtpTo,
      subject: subject,
      html: htmlContent,
    });

    console.log('Email successfully dispatched:', info.messageId);
    return { success: true };
  } catch (error: any) {
    console.error('SMTP sending error:', error);
    return { success: false, error: error.message || 'SMTP failed' };
  }
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Разрешаваме заявки само през POST метод
  if (req.method !== 'POST') {
    return res.status(451).json({ error: 'Method not allowed' });
  }

  const data = req.body;
  const urlPath = req.url || '';

  // 1. АКО ЗАЯВКАТА Е ЗА ОБИКНОВЕНАТА ФОРМА ЗА КОНТАКТ (/api/contact)
  if (urlPath.includes('contact') || data.formType === 'consult' || data.formType === 'contact') {
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
          <p style="margin: 8px 0;"><strong>Имейл / Email:</strong> ${data.formData?.email || 'Няма'}</p>
          <p style="margin: 8px 0;"><strong>Телефон / Phone:</strong> ${data.formData?.phone || 'Няма'}</p>
        </div>
        ${appointmentDetails}
        <div style="background-color: #18181b; padding: 20px; border-radius: 6px; border: 1px solid #27272a;">
          <h3 style="margin-top: 0; color: #f4f4f5; font-size: 16px; border-bottom: 1px solid #27272a; padding-bottom: 8px;">💡 Описание на проекта:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6; color: #e4e4e7; margin: 8px 0;">${data.formData?.projectDescription || 'Няма предоставено описание'}</p>
        </div>
      </div>
    `;

    const subject = `[Ново Запитване] ${data.formData?.name || 'Клиент'} - ${formTypeLabel}`;
    const emailResult = await sendEmailNotification(subject, emailHtml);

    return res.status(200).json({
      status: 'ok',
      emailSent: emailResult.success,
      error: emailResult.error
    });
  }

  // 2. АКО ЗАЯВКАТА Е ЗА БЪРЗАТА ОФЕРТА (/api/quote)
  const emailHtmlQuote = `
    <div style="font-family: sans-serif; background-color: #0c0a09; color: #e4e4e7; padding: 40px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #27272a;">
      <h2 style="color: #10b981; font-family: serif; border-bottom: 1px solid #27272a; padding-bottom: 12px; margin-top: 0;">🎯 Запитване за Бърза Оферта</h2>
      <div style="background-color: #18181b; padding: 20px; border-radius: 6px; border: 1px solid #27272a; margin-bottom: 20px;">
        <h3 style="margin-top: 0; color: #f4f4f5; font-size: 16px; border-bottom: 1px solid #27272a; padding-bottom: 8px;">👤 Клиентски данни:</h3>
        <p style="margin: 8px 0;"><strong>Име / Name:</strong> ${data.name || 'Няма'}</p>
        <p style="margin: 8px 0;"><strong>Имейл / Email:</strong> ${data.email || 'Няма'}</p>
        <p style="margin: 8px 0;"><strong>Телефон / Phone:</strong> ${data.phone || 'Няма'}</p>
      </div>
      <div style="background-color: #064e3b; border-left: 4px solid #10b981; padding: 12px; margin: 16px 0; border-radius: 4px; color: #a7f3d0;">
        <h3 style="margin: 0 0 8px 0; font-family: monospace;">💎 Избран План:</h3>
        <p style="margin: 4px 0; text-transform: uppercase; font-weight: bold;">${data.plan || 'standard'}</p>
      </div>
      <div style="background-color: #18181b; padding: 20px; border-radius: 6px; border: 1px solid #27272a;">
        <h3 style="margin-top: 0; color: #f4f4f5; font-size: 16px; border-bottom: 1px solid #27272a; padding-bottom: 8px;">💡 Описание:</h3>
        <p style="white-space: pre-wrap; line-height: 1.6; color: #e4e4e7; margin: 8px 0;">${data.description || 'Няма предоставено описание'}</p>
      </div>
    </div>
  `;

  const subjectQuote = `[Бърза Оферта] ${data.name || 'Клиент'} - План: ${data.plan || 'standard'}`;
  const emailResultQuote = await sendEmailNotification(subjectQuote, emailHtmlQuote);

  return res.status(200).json({
    status: 'ok',
    emailSent: emailResultQuote.success,
    error: emailResultQuote.error
  });
}
