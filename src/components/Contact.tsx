import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, CalendarRange, Clock, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { Language } from '../types';
import { getTranslator } from '../translations';

interface ContactProps {
  language: Language;
}

export const Contact: React.FC<ContactProps> = ({ language }) => {
  const t = getTranslator(language);

  const monthsEN = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const monthsBG = [
    'Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни',
    'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'
  ];

  const months = language === 'en' ? monthsEN : monthsBG;

  // Day array: 1 to 31
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  // Time array: 09:00 to 21:00 every half-hour
  const times: string[] = [];
  for (let h = 9; h <= 21; h++) {
    const hourStr = h.toString().padStart(2, '0');
    times.push(`${hourStr}:00`);
    if (h < 21) {
      times.push(`${hourStr}:30`);
    }
  }

  // Date restriction states
  const currentDate = new Date();
  const currentMonthIdx = currentDate.getMonth(); // 0-11
  const currentDay = currentDate.getDate();      // 1-31

  // Selection states
  const [selectedMonthIdx, setSelectedMonthIdx] = useState<number>(currentMonthIdx);
  const [selectedDay, setSelectedDay] = useState<number>(currentDay);
  const [selectedTime, setSelectedTime] = useState<string>('09:00');

  // Input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Auto-adjust day / month validation when current selection updates
  useEffect(() => {
    // If the selected month is the current month and the day selected is in the past, auto-advance it
    if (selectedMonthIdx === currentMonthIdx && selectedDay < currentDay) {
      setSelectedDay(currentDay);
    }
  }, [selectedMonthIdx, currentDay, currentMonthIdx, selectedDay]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Strict Past Date Check Validation
    if (selectedMonthIdx < currentMonthIdx) {
      setErrorMessage(
        language === 'en'
          ? 'Selected month is in the past. Please choose current or future availability.'
          : 'Избраният месец е в миналото. Моля, изберете текущия или бъдещ месец.'
      );
      return;
    }

    if (selectedMonthIdx === currentMonthIdx && selectedDay < currentDay) {
      setErrorMessage(
        language === 'en'
          ? 'Selected day is in the past. Please choose today or a future date.'
          : 'Избраният ден вече е минал. Моля, изберете днешна или бъдеща дата.'
      );
      return;
    }

    if (!name || !email || !projectDescription) {
      setErrorMessage(
        language === 'en'
          ? 'Required fields count invalid. Provide name, email, and vision description.'
          : 'Моля, попълнете задължителните полета: Име, Имейл и Описание.'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'consult',
          selectedMonth: monthsEN[selectedMonthIdx],
          selectedDay,
          selectedTime,
          formData: {
            name,
            email,
            phone,
            businessName,
            projectDescription,
          },
        }),
      });

      const result = await response.json();

      if (response.ok && result.status === 'ok') {
        setIsSuccess(true);
        // Clean form
        setName('');
        setEmail('');
        setPhone('');
        setBusinessName('');
        setProjectDescription('');
      } else {
        throw new Error(result.error || 'Server processing failed');
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage(
        language === 'en'
          ? `Submission failed: ${err.message || 'Server offline'}. Your request was written to emergency local storage.`
          : `Неуспешно изпращане: ${err.message || 'Сървърът е офлайн'}. Запитването беше съхранено в локалния ви браузър.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-zinc-950/20 border-b border-white/5 font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/[0.015] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <CalendarRange className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-semibold">
              {t('contactSubtitle')}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            {t('contactTitle')}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t('contactDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Info Panels (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-2xl glow-blue">
              <h3 className="font-serif text-lg font-bold text-white mb-4">
                {language === 'en' ? 'Direct Dispatch Links' : 'Директна връзка'}
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:designbyandrey@gmail.com"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors py-2 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-blue-500/30 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <span className="font-mono text-xs">designbyandrey@gmail.com</span>
                </a>

                <a
                  href="tel:0888616641"
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors py-2 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-blue-500/30 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <span className="font-mono text-xs">0888 616 641</span>
                </a>
              </div>
            </div>

            <div className="p-6 bg-zinc-900/10 border border-dashed border-white/5 rounded-2xl">
              <h4 className="font-serif text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">
                {language === 'en' ? '// Core Hours SLA:' : '// Работно време:'}
              </h4>
              <p className="text-zinc-500 text-xs leading-relaxed font-sans">
                {language === 'en'
                  ? 'Consultations are processed in Bulgarian or English within 4 hours. Custom engineering projects undergo severe safety analysis.'
                  : 'Консултациите се обработват на български или английски до 4 часа след запитване. Всеки проект подлежи на подробен технически одит.'}
              </p>
            </div>
          </div>

          {/* Form and Schedulers (lg:col-span-8) */}
          <div className="lg:col-span-8">
            <div className="p-8 sm:p-10 bg-zinc-900/40 border border-white/5 rounded-3xl glass-panel relative">
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 flex flex-col items-center justify-center"
                  >
                    <CheckCircle className="w-16 h-16 text-emerald-400 mb-6 animate-pulse" />
                    <h3 className="font-serif text-2xl font-bold text-white mb-3">
                      {language === 'en' ? 'Blueprint Scheduled!' : 'Часът е успешно запазен!'}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm max-w-md leading-relaxed mb-8">
                      {language === 'en'
                        ? 'Thank you. We have received your instant request blueprint and dispatched confirmation. Andrey and Rumen will review your description.'
                        : 'Благодарим Ви! Вашето уеб запитване е успешно изпратено. Андрей и Румен ще прегледат описанието на проекта Ви.'}
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 bg-zinc-900 border border-white/10 text-white font-mono text-[10px] uppercase font-semibold tracking-wider rounded-lg hover:border-white/20 transition-all cursor-pointer"
                    >
                      {language === 'en' ? 'Submit Another Response' : 'Изпрати ново'}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                  >
                    {/* Error Alerts */}
                    {errorMessage && (
                      <div className="p-4 bg-red-950/40 border border-red-500/20 rounded-xl flex items-start gap-3 text-red-300 text-xs leading-relaxed animate-shake">
                        <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0 text-red-400" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Bilingual Selector grids (Числа 1-31, Месеци, Часове 9-21) */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-3 font-semibold flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        {t('consultationDateLabel')} *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                        
                        {/* Month Selector dropdown */}
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[9px] text-[#6B7280] uppercase tracking-wider">// Month / Месец</span>
                          <select
                            value={selectedMonthIdx}
                            onChange={(e) => setSelectedMonthIdx(parseInt(e.target.value, 10))}
                            className="bg-zinc-950 border border-white/5 rounded-xl px-4 py-3 text-zinc-100 focus:border-blue-500/50 focus:outline-none cursor-pointer"
                          >
                            {months.map((m, idx) => (
                              <option key={idx} value={idx} disabled={idx < currentMonthIdx}>
                                {m} {idx < currentMonthIdx ? '(Past / Минал)' : ''}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Day Selector dropdown (1 to 31) */}
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[9px] text-[#6B7280] uppercase tracking-wider">// Day / Ден</span>
                          <select
                            value={selectedDay}
                            onChange={(e) => setSelectedDay(parseInt(e.target.value, 10))}
                            className="bg-zinc-950 border border-white/5 rounded-xl px-4 py-3 text-zinc-100 focus:border-blue-500/50 focus:outline-none cursor-pointer"
                          >
                            {days.map((d) => {
                              const isPastDay = selectedMonthIdx === currentMonthIdx && d < currentDay;
                              return (
                                <option key={d} value={d} disabled={isPastDay}>
                                  {d} {isPastDay ? '(Past / Минал)' : ''}
                                </option>
                              );
                            })}
                          </select>
                        </div>

                        {/* Hour slot dropdown (9:00 to 21:00) */}
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[9px] text-[#6B7280] uppercase tracking-wider">// Time / Час</span>
                          <select
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="bg-zinc-950 border border-white/5 rounded-xl px-4 py-3 text-zinc-100 focus:border-blue-500/50 focus:outline-none cursor-pointer"
                          >
                            {times.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>

                      </div>
                    </div>

                    <div className="h-px bg-white/5 my-4" />

                    {/* Standard inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
                          {t('nameLabel')} *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Andrew Ryan"
                          className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:border-blue-500/50 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
                          {t('emailLabel')} *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="client@luxury-domain.com"
                          className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:border-blue-500/50 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
                          {t('phoneLabel')}
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+359 888 ..."
                          className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:border-blue-500/50 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
                          {t('businessLabel')}
                        </label>
                        <input
                          type="text"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          placeholder="Luxor Group Ltd."
                          className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:border-blue-500/50 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
                        {t('descriptionLabel')} *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        placeholder="..."
                        className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:border-blue-500/50 focus:outline-none"
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            {t('consultationBtn')}
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Contact;
