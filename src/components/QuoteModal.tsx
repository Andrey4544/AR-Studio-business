/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, Award, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const { language, t } = useLanguage();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState('standard');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const validate = () => {
    const err: Record<string, string> = {};
    if (!name.trim()) {
      err.name = language === 'en' ? 'Your name is required' : 'Вашето име е задължително';
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      err.email = language === 'en' ? 'Valid email is required' : 'Въведете валиден имейл адрес';
    }
    if (!phone.trim()) {
      err.phone = language === 'en' ? 'Valid phone is required' : 'Въведете валиден телефон';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          plan,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }
    } catch (err) {
      console.error('Error submitting quote:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setName('');
        setPhone('');
        setEmail('');
        setDescription('');
        onClose();
      }, 3500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-luxury-black/90 backdrop-blur-sm pointer-events-auto"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-lg glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl overflow-y-auto max-h-[90vh] z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-900 border border-transparent hover:border-white/5 text-zinc-400 hover:text-white transition-all focus:outline-none cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                // Success Modal state
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex h-14 w-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 items-center justify-center mb-6">
                    <Check className="w-6 h-6 text-emerald-400 animate-pulse" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    {language === 'en' ? 'Estimate Received!' : 'Офертата е изпратена!'}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed max-w-sm mx-auto">
                    {language === 'en' 
                      ? `Andrey, Rumen & Nikolay are drafting a luxury vision layout summary tailored for your business. We will coordinate via your phone ${phone} shortly.`
                      : `Андрей, Румен и Николай изготвят луксозен идеен уеб проект за Вашия бизнес. Ще се свържем с Вас на телефон ${phone} съвсем скоро.`}
                  </p>
                </motion.div>
              ) : (
                // Input form state
                <motion.div
                  key="inputs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-6 text-left">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-3">
                      <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-[9px] font-mono tracking-widest uppercase text-blue-400 font-semibold">
                        {language === 'en' ? 'Instant Quote Request' : 'Бързо Запитване за Оферта'}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight leading-none mb-1">
                      {language === 'en' ? 'Get Estimated Today' : 'План на сайта без риск'}
                    </h3>
                    <p className="text-zinc-400 text-xs mt-1.5">
                      {language === 'en' 
                        ? 'Direct consultation with our team. No upfront risks.' 
                        : 'Директна връзка с нашия екип - Андрей, Румен и Николай.'}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Name */}
                    <div className="flex flex-col text-left">
                      <label className="text-[9px] font-mono uppercase font-bold text-zinc-500 tracking-wider mb-2">
                        {language === 'en' ? 'Your Name *' : 'Вашето име *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder={language === 'en' ? 'Elena Nikolova' : 'Елена Николова'}
                        className="bg-zinc-950 border border-white/5 focus:border-blue-500 text-xs text-white rounded-lg px-4 py-3 focus:outline-none transition-colors"
                      />
                      {errors.name && <span className="text-[9px] font-mono text-red-400 mt-1">{errors.name}</span>}
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                      
                      {/* Email */}
                      <div className="flex flex-col">
                        <label className="text-[9px] font-mono uppercase font-bold text-zinc-500 tracking-wider mb-2">
                          {language === 'en' ? 'Email *' : 'Имейл адрес *'}
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          placeholder="elena@beauty.bg"
                          className="bg-zinc-950 border border-white/5 focus:border-blue-500 text-xs text-white rounded-lg px-4 py-3 focus:outline-none transition-colors"
                        />
                        {errors.email && <span className="text-[9px] font-mono text-red-400 mt-1">{errors.email}</span>}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col">
                        <label className="text-[9px] font-mono uppercase font-bold text-zinc-500 tracking-wider mb-2">
                          {language === 'en' ? 'Phone *' : 'Телефонен номер *'}
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone) setErrors({ ...errors, phone: '' });
                          }}
                          placeholder="0888 123 456"
                          className="bg-zinc-950 border border-white/5 focus:border-blue-500 text-xs text-white rounded-lg px-4 py-3 focus:outline-none transition-colors"
                        />
                        {errors.phone && <span className="text-[9px] font-mono text-red-400 mt-1">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Select Package */}
                    <div className="flex flex-col text-left">
                      <label className="text-[9px] font-mono uppercase font-bold text-zinc-500 tracking-wider mb-2">
                        {language === 'en' ? 'Select Interest Profile' : 'Изберете тип сайт'}
                      </label>
                      <select
                        value={plan}
                        onChange={(e) => setPlan(e.target.value)}
                        className="bg-zinc-950 border border-white/5 focus:border-blue-500 text-xs text-zinc-300 rounded-lg px-4 py-3.5 focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="basic">
                          {language === 'en' ? 'Basic Website (starting €250)' : 'Икономичен уебсайт (от €250)'}
                        </option>
                        <option value="standard">
                          {language === 'en' ? 'Standard Website • Popular (starting €450)' : 'Професионален сайт • Популярен (от €450)'}
                        </option>
                        <option value="premium">
                          {language === 'en' ? 'Premium website (starting €600)' : 'Луксозен уебсайт (от €600)'}
                        </option>
                        <option value="e-commerce">
                          {language === 'en' ? 'E-commerce Store (starting €800)' : 'Онлайн магазин (от €800)'}
                        </option>
                        <option value="maintenance">
                          {language === 'en' ? 'Website Maintenance (starting €50/mo)' : 'Месечна поддръжка (от €50/месец)'}
                        </option>
                        <option value="combo">
                          {language === 'en' ? 'Combo Website + Social package (starting €110/mo)' : 'Комбо сайт + Поддръжка (от €110/месец)'}
                        </option>
                        <option value="qr-code">
                          {language === 'en' ? 'QR Code Menu & Integration (starting €80)' : 'QR код меню и интеграция (от €80)'}
                        </option>
                        <option value="logo-design">
                          {language === 'en' ? 'Professional Logo Design (starting €150)' : 'Професионален дизайн на лого (от €150)'}
                        </option>
                        <optgroup label={language === 'en' ? 'Luxury Bundles (Save Money)' : 'Пакетни предложения (Спестете пари)'}>
                          <option value="bundle-starter">
                            {language === 'en' ? 'Starter Pro Bundle (€350)' : 'Starter Pro Пакет (€350)'}
                          </option>
                          <option value="bundle-business">
                            {language === 'en' ? 'Business Elite Bundle (€550)' : 'Business Elite Пакет (€550)'}
                          </option>
                          <option value="bundle-ultimate">
                            {language === 'en' ? 'Ultimate Digital Growth (€850)' : 'Ultimate Digital Growth Пакет (€850)'}
                          </option>
                        </optgroup>
                        <option value="custom">
                          {language === 'en' ? 'Other Bespoke Collaboration' : 'Друго индивидуално запитване'}
                        </option>
                      </select>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col text-left">
                      <label className="text-[9px] font-mono uppercase font-bold text-zinc-500 tracking-wider mb-2">
                        {language === 'en' ? 'Tell us about your brand' : 'Разкажете ни за Вашата идея'}
                      </label>
                      <textarea
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder={
                          language === 'en' 
                            ? 'Tell us a little bit about what you do, and what you’re hoping to achieve.'
                            : 'Напишете накратко каква е дейността Ви и какъв сайт си представяте.'
                        }
                        className="bg-zinc-950 border border-white/5 focus:border-blue-500 text-xs text-zinc-300 rounded-lg px-4 py-3 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Guarantee indicators */}
                    <div className="bg-zinc-950/40 p-3 rounded-lg border border-white/5 flex gap-2.5 items-center my-2 text-left">
                      <Award className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="text-[9.5px] font-mono text-zinc-500 leading-normal">
                        🛡️                         <span className="text-white font-bold">{language === 'en' ? 'No-Risk Pact' : '100% Без Риск'}</span>: {
                          language === 'en' 
                            ? 'You pay zero EUR until you review the final completed web build and are highly thrilled.'
                            : 'Плащате нула евро, докато не прегледате завършения уебсайт и не го одобрите напълно.'
                        }
                      </span>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 font-bold text-xs text-white py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/15 flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                            <span>{language === 'en' ? 'Dispatching blueprint...' : 'Изпращане на данните...'}</span>
                          </>
                        ) : (
                          <>
                            <span>{language === 'en' ? 'Request Estimate Now' : 'Изпрати запитване за оферта'}</span>
                            <ArrowRight className="w-3.5 h-3.5 font-bold" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
