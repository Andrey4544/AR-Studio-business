import express from 'express';
import path from 'path';
import fs from 'fs';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser limit and parsing
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Helper to ensure submissions dir exists
  const submissionsFilePath = path.join(process.cwd(), 'submissions_backup.json');
  const reviewsFilePath = path.join(process.cwd(), 'reviews.json');

  // Helper to get reviews
  const getReviews = () => {
    if (!fs.existsSync(reviewsFilePath)) return [];
    try {
      return JSON.parse(fs.readFileSync(reviewsFilePath, 'utf-8'));
    } catch {
      return [];
    }
  };

  // Helper to save reviews
  const saveReviews = (reviews: any[]) => {
    fs.writeFileSync(reviewsFilePath, JSON.stringify(reviews, null, 2), 'utf-8');
  };

  const saveSubmissionToBackup = (data: any) => {
    try {
      let currentBackup: any[] = [];
      if (fs.existsSync(submissionsFilePath)) {
        const fileContent = fs.readFileSync(submissionsFilePath, 'utf-8');
        try {
          currentBackup = JSON.parse(fileContent);
        } catch {
          // invalid or empty file
          currentBackup = [];
        }
      }
      currentBackup.push({
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        ...data,
      });
      fs.writeFileSync(submissionsFilePath, JSON.stringify(currentBackup, null, 2), 'utf-8');
    } catch (err) {
      console.error('Error saving submission backup:', err);
    }
  };

  const sendEmailNotification = async (subject: string, htmlContent: string) => {
    const smtpTo = process.env.SMTP_TO || 'abelev48@gmail.com';
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
    const smtpSecure = process.env.SMTP_SECURE !== 'false'; // defaults to true unless explicitly false

    // Check configuration
    if (!smtpUser || !smtpPass) {
      console.warn(`[SMTP Warning] SMTP credentials (SMTP_USER/SMTP_PASS) are not set. Email not sent to ${smtpTo}. Submission written to backup.`);
      return {
        success: false,
        error: 'SMTP credentials missing on server. Submission was successfully captured and saved in client backups.',
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

  // API Route - Health Check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // API Route - Get Approved Reviews
  app.get('/api/reviews', (req, res) => {
    const reviews = getReviews().filter((r: any) => r.status === 'approved');
    res.json(reviews);
  });

  // API Route - Submit Review (Pending Approval)
  app.post('/api/reviews', async (req, res) => {
    const { name, role, company, text, rating } = req.body;
    const reviews = getReviews();
    const newReview = {
      id: Date.now().toString(),
      name,
      role,
      company,
      text,
      rating: parseInt(rating, 10) || 5,
      status: 'pending',
      timestamp: new Date().toISOString()
    };
    reviews.push(newReview);
    saveReviews(reviews);

    // Send notification email for new review
    const emailHtml = `
      <div style="font-family: sans-serif; background-color: #0c0a09; color: #e4e4e7; padding: 40px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #27272a;">
        <h2 style="color: #f59e0b; font-family: serif; border-bottom: 1px solid #27272a; padding-bottom: 12px; margin-top: 0;">🌟 Нов отзив за одобрение</h2>
        <div style="background-color: #18181b; padding: 20px; border-radius: 6px; border: 1px solid #27272a; margin-bottom: 20px;">
          <p><strong>От:</strong> ${name} (${role} @ ${company})</p>
          <p><strong>Оценка:</strong> ${'⭐'.repeat(newReview.rating)}</p>
          <p style="font-style: italic;">"${text}"</p>
        </div>
        <p style="font-size: 12px; color: #71717a;">Влезте в админ панела, за да одобрите или изтриете този отзив.</p>
      </div>
    `;
    await sendEmailNotification(`[Нов Отзив] от ${name}`, emailHtml);

    res.json({ status: 'ok', message: 'Review submitted for approval' });
  });

  // API Route - Admin Login (Simple)
  app.post('/api/admin/login', (req, res) => {
    const { password } = req.body;
    const adminPass = process.env.ADMIN_PASS || 'admin123';
    if (password === adminPass) {
      res.json({ status: 'ok', token: 'fake-jwt-token' });
    } else {
      res.status(401).json({ status: 'error', message: 'Invalid password' });
    }
  });

  // API Route - Admin Get All Reviews
  app.get('/api/admin/reviews', (req, res) => {
    // In a real app, check token here
    res.json(getReviews());
  });

  // API Route - Admin Moderate Review
  app.post('/api/admin/reviews/moderate', (req, res) => {
    const { id, action } = req.body; // action: 'approve' or 'delete'
    let reviews = getReviews();
    if (action === 'approve') {
      reviews = reviews.map((r: any) => r.id === id ? { ...r, status: 'approved' } : r);
    } else if (action === 'delete') {
      reviews = reviews.filter((r: any) => r.id !== id);
    }
    saveReviews(reviews);
    res.json({ status: 'ok' });
  });

  // API Route - Contact Form / Consult Requests
  app.post('/api/contact', async (req, res) => {
    const data = req.body;
    saveSubmissionToBackup({ type: 'contact', data });

    // Build Email Layout
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

    res.json({
      status: 'ok',
      savedLocally: true,
      emailSent: emailResult.success,
      error: emailResult.error
    });
  });

  // API Route - Quote Modal Submissions
  app.post('/api/quote', async (req, res) => {
    const data = req.body;
    saveSubmissionToBackup({ type: 'quote', data });

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

    res.json({
      status: 'ok',
      savedLocally: true,
      emailSent: emailResult.success,
      error: emailResult.error
    });
  });

  // Serve static assets and Vite setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
