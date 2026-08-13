import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Send } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { trackAnalyticsEvent } from '../lib/analytics';

const goals = [
  { value: 'presentation', bg: 'По-добро представяне на бизнеса', en: 'A clearer presentation of the business' },
  { value: 'enquiries', bg: 'Повече запитвания и обаждания', en: 'More enquiries and calls' },
  { value: 'bookings', bg: 'Резервации или записване на час', en: 'Bookings or appointments' },
  { value: 'sales', bg: 'Онлайн продажби', en: 'Online sales' },
  { value: 'other', bg: 'Друга конкретна цел', en: 'Another specific goal' },
];

export default function ProjectBriefPage() {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: '',
    goal: '',
    materials: '',
    reference: '',
    projectDescription: '',
  });

  usePageMeta({
    title: language === 'en' ? 'Project Brief | AR Studio' : 'Кратък проектен бриф | AR Studio',
    description: language === 'en'
      ? 'Answer a few practical questions before starting a website project with AR Studio.'
      : 'Отговорете на няколко практични въпроса преди да започнете проект за уебсайт с AR Studio.',
    canonical: 'https://www.ar-studio.site/brief',
  });

  const setField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    const selectedGoal = goals.find((goal) => goal.value === form.goal);
    const briefText = [
      language === 'en' ? `Business type: ${form.businessType}` : `Тип бизнес: ${form.businessType}`,
      language === 'en' ? `Primary goal: ${selectedGoal?.en || form.goal}` : `Основна цел: ${selectedGoal?.bg || form.goal}`,
      language === 'en' ? `Available materials: ${form.materials || 'Not specified'}` : `Налични материали: ${form.materials || 'Не е посочено'}`,
      language === 'en' ? `Reference sites: ${form.reference || 'Not specified'}` : `Референтни сайтове: ${form.reference || 'Не е посочено'}`,
      language === 'en' ? `Additional context: ${form.projectDescription || 'Not specified'}` : `Допълнителна информация: ${form.projectDescription || 'Не е посочено'}`,
    ].join('\n\n');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'brief',
          formData: {
            name: form.name,
            businessName: form.businessName,
            email: form.email,
            phone: form.phone,
            projectDescription: briefText,
          },
        }),
      });

      if (!response.ok) throw new Error('Brief submission failed');
      trackAnalyticsEvent('generate_lead', { lead_source: 'project_brief', primary_goal: form.goal });
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setError(language === 'en'
        ? 'Your brief could not be sent. Please call us or try again shortly.'
        : 'Брифът не можа да бъде изпратен. Моля, обадете ни се или опитайте отново след малко.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <PageTransition>
        <main className="min-h-screen bg-luxury-black px-4 pb-20 pt-36">
          <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-10 text-center shadow-2xl shadow-emerald-950/20">
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-300" />
            <h1 className="mt-6 font-serif text-3xl font-bold text-white">
              {language === 'en' ? 'Your project brief has been sent' : 'Вашият проектен бриф е изпратен'}
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-zinc-300">
              {language === 'en'
                ? 'Thank you for the clear information. Andrey or Rumen will review it and respond directly within the working day.'
                : 'Благодарим за ясната информация. Андрей или Румен ще я прегледат и ще Ви отговорят директно в рамките на работния ден.'}
            </p>
            <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition-transform duration-150 hover:bg-zinc-200 active:scale-[0.97]">
              {language === 'en' ? 'Back to the website' : 'Назад към сайта'}
            </Link>
          </div>
        </main>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-luxury-black px-4 pb-24 pt-32 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Link to="/kontakti" className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition-colors hover:text-blue-200">
            <ArrowLeft className="h-4 w-4" />
            {language === 'en' ? 'Back to contact' : 'Назад към контактите'}
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
                {language === 'en' ? 'BEFORE WE START' : 'ПРЕДИ ДА ЗАПОЧНЕМ'}
              </p>
              <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {language === 'en' ? 'A short project brief' : 'Кратък проектен бриф'}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-zinc-400">
                {language === 'en'
                  ? 'You do not need a perfect specification. A few honest answers help us make the first conversation useful and focused.'
                  : 'Не Ви трябва перфектно задание. Няколко честни отговора помагат първият разговор да бъде полезен и фокусиран.'}
              </p>
              <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                {[
                  language === 'en' ? 'What does your business offer?' : 'Какво предлага Вашият бизнес?',
                  language === 'en' ? 'What should the visitor be able to do?' : 'Какво трябва да може да направи посетителят?',
                  language === 'en' ? 'What content, photos, or logo do you already have?' : 'Какви текстове, снимки или лого вече имате?',
                  language === 'en' ? 'Which sites do you like and why?' : 'Кои сайтове харесвате и защо?',
                ].map((question, index) => (
                  <div key={question} className="flex gap-3 text-sm text-zinc-300">
                    <span className="font-mono text-blue-300">0{index + 1}</span>
                    <span>{question}</span>
                  </div>
                ))}
              </div>
            </aside>

            <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 shadow-2xl shadow-black/20 sm:p-8">
              {error && <p role="alert" className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p>}
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-zinc-200">
                  {language === 'en' ? 'Your name *' : 'Вашето име *'}
                  <input required value={form.name} onChange={(e) => setField('name', e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-blue-400" />
                </label>
                <label className="block text-sm font-medium text-zinc-200">
                  {language === 'en' ? 'Business name *' : 'Име на бизнеса *'}
                  <input required value={form.businessName} onChange={(e) => setField('businessName', e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-blue-400" />
                </label>
                <label className="block text-sm font-medium text-zinc-200">
                  {language === 'en' ? 'Email *' : 'Имейл *'}
                  <input required type="email" value={form.email} onChange={(e) => setField('email', e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-blue-400" />
                </label>
                <label className="block text-sm font-medium text-zinc-200">
                  {language === 'en' ? 'Phone *' : 'Телефон *'}
                  <input required value={form.phone} onChange={(e) => setField('phone', e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-blue-400" />
                </label>
              </div>

              <label className="mt-5 block text-sm font-medium text-zinc-200">
                {language === 'en' ? 'What type of business do you have? *' : 'Какъв тип бизнес имате? *'}
                <input required value={form.businessType} onChange={(e) => setField('businessType', e.target.value)} placeholder={language === 'en' ? 'For example: restaurant, real estate agency, online store' : 'Например: ресторант, агенция за имоти, онлайн магазин'} className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-blue-400" />
              </label>

              <fieldset className="mt-6">
                <legend className="text-sm font-medium text-zinc-200">{language === 'en' ? 'What is the main goal? *' : 'Каква е основната цел? *'}</legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {goals.map((goal) => (
                    <label key={goal.value} className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 text-sm transition-colors ${form.goal === goal.value ? 'border-blue-400/60 bg-blue-500/10 text-white' : 'border-white/10 bg-white/[0.02] text-zinc-300 hover:border-white/20'}`}>
                      <input required type="radio" name="goal" value={goal.value} checked={form.goal === goal.value} onChange={(e) => setField('goal', e.target.value)} className="mt-0.5 accent-blue-500" />
                      <span>{language === 'en' ? goal.en : goal.bg}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="mt-5 block text-sm font-medium text-zinc-200">
                {language === 'en' ? 'What do you already have?' : 'Какво вече имате?'}
                <input value={form.materials} onChange={(e) => setField('materials', e.target.value)} placeholder={language === 'en' ? 'Logo, photos, texts, existing site, domain...' : 'Лого, снимки, текстове, стар сайт, домейн...'} className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-blue-400" />
              </label>
              <label className="mt-5 block text-sm font-medium text-zinc-200">
                {language === 'en' ? 'Reference sites you like' : 'Сайтове, които харесвате'}
                <input value={form.reference} onChange={(e) => setField('reference', e.target.value)} placeholder={language === 'en' ? 'Links or a short description are both useful' : 'Можете да поставите линк или кратко описание'} className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-blue-400" />
              </label>
              <label className="mt-5 block text-sm font-medium text-zinc-200">
                {language === 'en' ? 'Anything else that matters?' : 'Има ли още нещо важно?'}
                <textarea rows={5} value={form.projectDescription} onChange={(e) => setField('projectDescription', e.target.value)} placeholder={language === 'en' ? 'A target date, a feature, a concern, or the key problem the website should solve...' : 'Срок, функция, притеснение или основният проблем, който сайтът трябва да реши...'} className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-blue-400" />
              </label>

              <button disabled={isSubmitting} type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition-transform duration-150 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.97]">
                <Send className="h-4 w-4" />
                {isSubmitting ? (language === 'en' ? 'Sending...' : 'Изпраща се...') : (language === 'en' ? 'Send the project brief' : 'Изпрати проектния бриф')}
              </button>
              <p className="mt-4 text-center text-xs leading-relaxed text-zinc-500">
                {language === 'en' ? 'We use this information only to prepare your consultation.' : 'Използваме тази информация единствено, за да подготвим консултацията Ви.'}
              </p>
            </form>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
