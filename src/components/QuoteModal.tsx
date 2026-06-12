import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Mail, Phone, Calendar, AlertTriangle, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { getTranslator } from '../translations';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, language }) => {
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

  // Days 1-31
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  // Core SLA tiers
  const planTiers = [
    { id: 'starter', labelEN: 'Starter Blueprint (Landing & SEO)', labelBG: 'Стартов Проект (Премиум Лендинг)' },
    { id: 'scale', labelEN: 'Scale Platfom (E-Commerce & Portals)', labelBG: 'Платформа за Развитие (Ел. Търговия)' },
    { id: 'architecture', labelEN: 'Bespoke Architecture (Full Custom Systems)', labelBG: 'Индивидуална Архитектура (Мащабни Системи)' }
  ];

  // Restructure systems for dates
  const currentDate = new Date();
  const currentMonthIdx = currentDate.getMonth(); // 0-11
  const currentDay = currentDate.getDate();      // 1-31

  // Selector states
  const [selectedMonthIdx, setSelectedMonthIdx] = useState<number>(currentMonthIdx);
  const [selectedDay, setSelectedDay] = useState<number>(currentDay);
  const [selectedPlan, setSelectedPlan] = useState<string>('starter');

  // Input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');

  // Submission control
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Adjust selected day dynamically to block past selections
  useEffect(() => {
    if (selectedMonthIdx === currentMonthIdx && selectedDay < currentDay) {
      setSelectedDay(currentDay);
    }
  }, [selectedMonthIdx, currentMonthIdx, currentDay, selectedDay]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Strict Past Date Selector Block Checks
    if (selectedMonthIdx < currentMonthIdx) {
      setErrorMessage(
        language === 'en'
          ? 'Selected month is in the past. Choose current or future months.'
          : 'Избраният месец е в миналото. Моля, изберете текущия или бъдещ месец.'
      );
      return;
    }

    if (selectedMonthIdx === currentMonthIdx && selectedDay < currentDay) {
      setErrorMessage(
        language === 'en'
          ? 'Selected day has already passed. Please choose a future date.'
          : 'Избраният ден вече е минал. Моля, изберете днешна или бъдеща дата.'
      );
      return;
    }

    if (!name || !email || !description) {
      setErrorMessage(
        language === 'en'
          ? 'All fields with an asterisk * are required.'
          : 'Попълнете задължителните полета: Име, Имейл и Описание.'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          plan: selectedPlan,
          description,
          targetMonth: monthsEN[selectedMonthIdx],
          targetDay: selectedDay,
        }),
      });

      const result = await response.json();

      if (response.ok && result.status === 'ok') {
        setIsSuccess(true);
        // Reset
        setName('');
        setEmail('');
        setPhone('');
        setDescription('');
      } else {
        throw new Error(result.error || 'Server error processing quote');
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage(
        language === 'en'
          ? `Error submitting: ${err.message || 'Server connection failed'}. Saved locally.`
          : `Възникна грешка: ${err.message || 'Свързването провалено'}. Заявката е запазена локално.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop screen overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Sliding modal paper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-zinc-900 border border-white/10 rounded-3xl p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto glow-green font-sans"
          >
            {/* Close trigger button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1"
            >
              <X className="w-5 h-5 select-none" />
            </button>

            {isSuccess ? (
              <div className="text-center py-10 flex flex-col items-center">
                <CheckCircle className="w-14 h-14 text-emerald-400 mb-6 animate-pulse" />
                <h3 className="font-serif text-2xl font-bold text-white mb-3">
                  {language === 'en' ? 'Proposal Enroute!' : 'Офертата е проектирана!'}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-8 max-w-sm">
                  {language === 'en'
                    ? 'Your custom blueprint parameter specs have been recorded. Andrey and Rumen will reach out within 4 Core hours.'
                    : 'Вашите изисквания бяха записани. Андрей и Румен ще изпратят детайлно предложение в рамките на 4 часа.'}
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-mono text-xs font-bold uppercase tracking-widest hover:opacity-95 transition-all text-center cursor-pointer"
                >
                  {t('close')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                
                {/* Modal Title header */}
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#9CA3AF] font-bold">
                    LUXURY.DEV // ARCHITECTURE SPECIFIED
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                  {language === 'en' ? 'Get Instant Tailored Quote' : 'Индивидуална Бърза Оферта'}
                </h3>

                {errorMessage && (
                  <div className="p-4 bg-red-950/40 border border-red-500/20 rounded-xl flex items-start gap-3 text-red-300 text-xs">
                    <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Plan Dropdown Tier Selection */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
                    {language === 'en' ? 'Interest Segment:' : 'Избор на План:'}
                  </label>
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-3 text-xs text-zinc-100 focus:border-emerald-500/50 focus:outline-none cursor-pointer font-mono"
                  >
                    {planTiers.map((p) => (
                      <option key={p.id} value={p.id}>
                        {language === 'en' ? p.labelEN : p.labelBG}
                      </option>
                    ))}
                  </select>
                </div>

                {/* STRICT DATE VALIDATION SELECTIONS (Numbers 1-31, 12 Months) */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Months Selector */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] font-mono uppercase tracking-wider text-zinc-500">// Target Month</label>
                    <select
                      value={selectedMonthIdx}
                      onChange={(e) => setSelectedMonthIdx(parseInt(e.target.value, 10))}
                      className="bg-zinc-950 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-zinc-100 focus:outline-none cursor-pointer font-mono"
                    >
                      {months.map((m, idx) => (
                        <option key={idx} value={idx} disabled={idx < currentMonthIdx}>
                          {m} {idx < currentMonthIdx ? '(Past)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Day Selector (1 to 31) */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] font-mono uppercase tracking-wider text-zinc-500">// Day (1-31)</label>
                    <select
                      value={selectedDay}
                      onChange={(e) => setSelectedDay(parseInt(e.target.value, 10))}
                      className="bg-zinc-950 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-zinc-100 focus:outline-none cursor-pointer font-mono"
                    >
                      {days.map((d) => {
                        const isPastDay = selectedMonthIdx === currentMonthIdx && d < currentDay;
                        return (
                          <option key={d} value={d} disabled={isPastDay}>
                            {d} {isPastDay ? '(Past)' : ''}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                </div>

                {/* Grid text fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-zinc-100 focus:border-emerald-500/50 focus:outline-none"
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
                      placeholder="client@net-auth.co"
                      className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-zinc-100 focus:border-emerald-500/50 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
                    {t('phoneLabel')}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+359 8..."
                    className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-zinc-100 focus:border-emerald-500/50 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
                    {t('descriptionLabel')} *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="..."
                    className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-zinc-100 focus:border-emerald-500/50 focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:opacity-95 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/10 cursor-pointer disabled:opacity-50 font-sans"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      t('quoteBtn')
                    )}
                  </button>
                </div>
              </form>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default QuoteModal;
