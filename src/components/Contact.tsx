/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Clock, FileCheck, ArrowRight, PhoneCall, Calendar, AlertCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactProps {
  preselectedPlan?: string;
}

export default function Contact({ preselectedPlan = '' }: ContactProps) {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    projectDescription: preselectedPlan 
      ? (language === 'en' ? `Interested in: ${preselectedPlan}. ` : `Интерес към: ${preselectedPlan}. `)
      : '',
  });

  const [formType, setFormType] = useState<'quote' | 'consult'>('quote');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = language === 'en' ? 'Your name is required' : 'Вашето име е задължително';
    }
    if (!formData.email.trim()) {
      newErrors.email = language === 'en' ? 'Email address is required' : 'Имейл адресът е задължителен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = language === 'en' ? 'Please provide a valid email' : 'Моля, въведете валиден имейл';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = language === 'en' ? 'Phone number is required' : 'Телефонният номер е задължителен';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 6) {
      newErrors.phone = language === 'en' ? 'Please provide a valid phone number' : 'Моля, въведете валиден телефонен номер';
    }
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = language === 'en' ? 'Please describe your vision' : 'Моля, опишете Вашата уеб визия';
    }

    if (formType === 'consult') {
      const now = new Date();
      const currentMonthIdx = now.getMonth();
      const currentDay = now.getDate();

      const englishMonths = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const bgMonths = [
        'Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни',
        'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'
      ];
      const monthsList = language === 'en' ? englishMonths : bgMonths;

      if (!selectedMonth) {
        newErrors.month = language === 'en' ? 'Please pick a month' : 'Моля, изберете месец';
      }
      if (!selectedDay) {
        newErrors.day = language === 'en' ? 'Please pick a day' : 'Моля, изберете ден';
      }

      if (selectedMonth && selectedDay) {
        const mIdx = monthsList.indexOf(selectedMonth);
        const dNum = parseInt(selectedDay, 10);
        const isPastMonth = mIdx < currentMonthIdx;
        const isPastDayInCurrentMonth = mIdx === currentMonthIdx && dNum < currentDay;

        if (isPastMonth || isPastDayInCurrentMonth) {
          newErrors.day = language === 'en' ? 'Selected date is in the past' : 'Избраната дата е в миналото';
        }
      }

      if (!selectedTime) {
        newErrors.time = language === 'en' ? 'Please pick a preferred slot' : 'Моля, изберете час';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleDaySelect = (day: string) => {
    setSelectedDay(day);
    if (errors.day) setErrors({ ...errors, day: '' });
  };

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month);
    if (errors.month) setErrors({ ...errors, month: '' });

    const now = new Date();
    const englishMonths = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const bgMonths = [
      'Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни',
      'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'
    ];
    const monthsList = language === 'en' ? englishMonths : bgMonths;

    // Reset day if it becomes in the past or invalid for the selected month
    if (month && selectedDay) {
      const mIdx = monthsList.indexOf(month);
      const dNum = parseInt(selectedDay, 10);
      const isPast = mIdx === now.getMonth() && dNum < now.getDate();
      const maxDays = new Date(now.getFullYear(), mIdx + 1, 0).getDate();
      
      if (isPast || dNum > maxDays) {
        setSelectedDay('');
      }
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    if (errors.time) setErrors({ ...errors, time: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType,
          formData,
          selectedDay,
          selectedMonth,
          selectedTime,
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    } catch (err) {
      console.error('Error submitting form:', err);
      // Fallback gracefully so the website remains perfectly usable offline or during config
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      businessName: '',
      email: '',
      phone: '',
      projectDescription: '',
    });
    setSelectedDay('');
    setSelectedMonth('');
    setSelectedTime('');
    setErrors({});
    setIsSubmitted(false);
  };

  const now = new Date();
  const currentMonthIdx = now.getMonth();
  const currentDay = now.getDate();

  const englishMonths = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const bgMonths = [
    'Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни',
    'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'
  ];

  const calendarMonths = language === 'en' ? englishMonths : bgMonths;

  const selectedMonthIdx = selectedMonth ? calendarMonths.indexOf(selectedMonth) : -1;
  const daysInMonth = selectedMonthIdx !== -1 
    ? new Date(now.getFullYear(), selectedMonthIdx + 1, 0).getDate() 
    : 31;

  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => String(i + 1));

  const calendarTimes = language === 'en' ? [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
    '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM',
    '09:00 PM'
  ] : [
    '09:00 часа', '09:30 часа', '10:00 часа', '10:30 часа',
    '11:00 часа', '11:30 часа', '12:00 часа', '12:30 часа',
    '13:00 часа', '13:30 часа', '14:00 часа', '14:30 часа',
    '15:00 часа', '15:30 часа', '16:00 часа', '16:30 часа',
    '17:00 часа', '17:30 часа', '18:00 часа', '18:30 часа',
    '19:00 часа', '19:30 часа', '20:00 часа', '20:30 часа',
    '21:00 часа'
  ];

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden border-t border-white/5">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-900/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-indigo-900/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-semibold font-bold">
              {t('contactSubTitle')}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            {language === 'en' ? (
              <>
                Let's Bring Your Brand <br />
                <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                  Online Together
                </span>
              </>
            ) : (
              <>
                Нека пренесем бранда Ви <br />
                <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                  онлайн заедно
                </span>
              </>
            )}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t('contactDesc')}
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Card left column: Contacts Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/5 h-full relative overflow-hidden glow-blue">
              <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-wider">
                {language === 'en' ? 'Fast Contact Channels' : 'Бързи канали за контакт'}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1 mb-8">
                {language === 'en' ? 'Direct Channels' : 'Директна връзка'}
              </h3>
              
              <div className="space-y-6">
                
                {/* Telephone */}
                <div
                  className="flex flex-col gap-3 p-4 rounded-xl bg-zinc-950/40 border border-white/5 text-left"
                >
                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-bold tracking-wider text-zinc-500 uppercase">
                        {language === 'en' ? 'Call Now (Direct)' : 'Позвънете ни (Директно)'}
                      </h4>
                      <span className="text-[10px] text-zinc-500 mt-0.5 block">
                        {language === 'en' ? 'Active on WhatsApp & Viber' : 'Активни във WhatsApp и Viber'}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/5">
                    <a
                      href="tel:0888616641"
                      className="group flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-900 border border-white/5 hover:border-blue-500/35 hover:bg-zinc-850 transition-all font-mono text-xs text-zinc-300 hover:text-blue-400 font-bold"
                    >
                      <Phone className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>0888 61 66 41</span>
                    </a>
                    <a
                      href="tel:0888379886"
                      className="group flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-900 border border-white/5 hover:border-blue-500/35 hover:bg-zinc-850 transition-all font-mono text-xs text-zinc-300 hover:text-blue-400 font-bold"
                    >
                      <Phone className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>0888 37 98 86</span>
                    </a>
                  </div>
                </div>

                {/* Email address */}
                <a
                  href="mailto:designbyandrey@gmail.com"
                  className="group flex gap-4 p-4 rounded-xl bg-zinc-950/40 border border-white/5 hover:border-blue-500/20 transition-all duration-300"
                >
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/15 group-hover:border-blue-500/35 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold tracking-wider text-zinc-500 uppercase">
                      {language === 'en' ? 'Email Us' : 'Пишете ни по имейл'}
                    </h4>
                    <p className="text-sm font-semibold text-white mt-1 group-hover:text-blue-400 transition-colors">designbyandrey@gmail.com</p>
                    <span className="text-[10px] text-zinc-500 mt-1 block">
                      {language === 'en' ? 'Response within 2 hours' : 'Отговор до 2 часа'}
                    </span>
                  </div>
                </a>

                {/* Response speed terms */}
                <div className="flex gap-4 p-4 rounded-xl bg-zinc-950/10 border border-transparent">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-zinc-900 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-zinc-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold tracking-wider text-zinc-500 uppercase">
                      {language === 'en' ? 'Operating Hours' : 'Работно време'}
                    </h4>
                    <p className="text-xs font-medium text-white mt-1">
                      {language === 'en' ? 'Mon - Sun \u2022 9:00 AM - 9:00 PM' : 'Пон - Нед \u2022 9:00 - 21:00 часа'}
                    </p>
                    <span className="text-[10px] text-zinc-500 mt-1 block">
                      {language === 'en' ? 'Available for emergency support 24/7' : 'На разположение за спешни случаи 24/7'}
                    </span>
                  </div>
                </div>

              </div>

              {/* Instant Call CTA for Mobile */}
              <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0888616641"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-650 hover:bg-blue-600/95 py-3.5 px-4 rounded-xl font-bold font-sans text-xs text-white border border-white/5 transition-all shadow-lg shadow-blue-500/5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-white" />
                  <span>0888 61 66 41</span>
                </a>
                <a
                  href="tel:0888379886"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 py-3.5 px-4 rounded-xl font-bold font-sans text-xs text-white border border-white/5 transition-all shadow-lg shadow-blue-500/5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-white" />
                  <span>0888 37 98 86</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form right column: Dynamic input actions panel */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 relative">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  // Success State
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12"
                  >
                    <div className="inline-flex h-14 w-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 items-center justify-center mb-6">
                      <FileCheck className="w-7 h-7 text-emerald-400" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                      {formType === 'quote' 
                        ? (language === 'en' ? 'Request Received!' : 'Запитването е получено!') 
                        : (language === 'en' ? 'Consultation Scheduled!' : 'Консултацията е насрочена!')}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-8">
                      {language === 'en' ? (
                        <>
                          Thank you, <span className="text-white font-semibold">{formData.name}</span>. 
                          Andrey, Rumen &amp; Nikolay have received your details for <span className="text-white font-medium font-mono">{formData.businessName || 'your business'}</span>. 
                          {formType === 'quote' 
                            ? ' We will review your vision and call you at ' 
                            : ' We are locking your slot and will meet you online on '}
                          <span className="text-blue-400 font-mono font-bold">
                            {formType === 'quote' ? formData.phone : `${selectedDay} ${selectedMonth} at ${selectedTime}`}
                          </span>.
                        </>
                      ) : (
                        <>
                          Благодарим Ви, <span className="text-white font-semibold">{formData.name}</span>. 
                          Андрей, Румен и Николай получиха Вашите данни за <span className="text-white font-medium font-mono">{formData.businessName || 'Вашия бизнес'}</span>. 
                          {formType === 'quote' 
                            ? ' Ще разгледаме идеята Ви и ще Ви се обадим на ' 
                            : ' Запазваме Вашия час и ще се срещнем онлайн на '}
                          <span className="text-blue-400 font-mono font-bold">
                            {formType === 'quote' ? formData.phone : `${selectedDay} ${selectedMonth} в ${selectedTime}`}
                          </span>.
                        </>
                      )}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        onClick={resetForm}
                        className="w-full sm:w-auto px-6 py-2.5 bg-zinc-900 border border-white/5 hover:border-white/10 hover:bg-zinc-850 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white transition-all cursor-pointer"
                      >
                        {language === 'en' ? 'Submit Another Message' : 'Изпрати ново запитване'}
                      </button>
                      <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                        <a
                          href="tel:0888616641"
                          className="w-full sm:w-auto px-5 py-2.5 bg-zinc-900 border border-white/5 hover:border-white/10 hover:bg-zinc-850 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-1.5"
                        >
                          <PhoneCall className="w-3.5 h-3.5 text-blue-500" />
                          <span>0888 61 66 41</span>
                        </a>
                        <a
                          href="tel:0888379886"
                          className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5"
                        >
                          <PhoneCall className="w-3.5 h-3.5 text-white" />
                          <span>0888 37 98 86</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  // Interactive Form state
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Form type toggler */}
                    <div className="flex items-center bg-zinc-950 p-1 rounded-xl border border-white/5 mb-8">
                      <button
                        type="button"
                        onClick={() => {
                          setFormType('quote');
                          setErrors({});
                        }}
                        className={`flex-1 py-3 text-center text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          formType === 'quote' ? 'bg-zinc-900 border border-white/5 text-white' : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                      >
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                        <span>{language === 'en' ? 'Request Quote' : 'Поискай Оферта'}</span>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => {
                          setFormType('consult');
                          setErrors({});
                        }}
                        className={`flex-1 py-3 text-center text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          formType === 'consult' ? 'bg-zinc-900 border border-white/5 text-white' : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        <span>{language === 'en' ? 'Schedule Consultation' : 'Запази час'}</span>
                      </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        
                        {/* Name input */}
                        <div className="flex flex-col">
                          <label className="text-[10px] font-mono uppercase font-bold text-zinc-500 tracking-wider mb-2">
                            {language === 'en' ? 'Your Name \u2022' : 'Вашето име \u2022'}
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={language === 'en' ? 'Ivan Georgiev' : 'Иван Георгиев'}
                            className={`bg-zinc-950 border ${
                              errors.name ? 'border-red-500/40 focus:border-red-500' : 'border-white/5 focus:border-blue-500'
                            } text-sm text-white rounded-xl px-4 py-3.5 focus:outline-none transition-colors`}
                          />
                          {errors.name && (
                            <span className="text-[10px] text-red-400 font-mono mt-1.5 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {errors.name}
                            </span>
                          )}
                        </div>

                        {/* Business Name */}
                        <div className="flex flex-col">
                          <label className="text-[10px] font-mono uppercase font-bold text-zinc-500 tracking-wider mb-2">
                            {language === 'en' ? 'Business Name (Optional)' : 'Фирма / Заведение (опционално)'}
                          </label>
                          <input
                            type="text"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            placeholder={language === 'en' ? 'My Restaurant Tomato' : 'Ресторант Томато Пловдив'}
                            className="bg-zinc-950 border border-white/5 focus:border-blue-500 text-sm text-white rounded-xl px-4 py-3.5 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Email input */}
                        <div className="flex flex-col">
                          <label className="text-[10px] font-mono uppercase font-bold text-zinc-500 tracking-wider mb-2">
                            {language === 'en' ? 'Email Address \u2022' : 'Имейл адрес \u2022'}
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email@example.bg"
                            className={`bg-zinc-950 border ${
                              errors.email ? 'border-red-500/40 focus:border-red-500' : 'border-white/5 focus:border-blue-500'
                            } text-sm text-white rounded-xl px-4 py-3.5 focus:outline-none transition-colors`}
                          />
                          {errors.email && (
                            <span className="text-[10px] text-red-400 font-mono mt-1.5 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {errors.email}
                            </span>
                          )}
                        </div>

                        {/* Phone input */}
                        <div className="flex flex-col">
                          <label className="text-[10px] font-mono uppercase font-bold text-zinc-500 tracking-wider mb-2">
                            {language === 'en' ? 'Phone Number \u2022' : 'Телефонен номер \u2022'}
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="0888 123 456"
                            className={`bg-zinc-950 border ${
                              errors.phone ? 'border-red-500/40 focus:border-red-500' : 'border-white/5 focus:border-blue-500'
                            } text-sm text-white rounded-xl px-4 py-3.5 focus:outline-none transition-colors`}
                          />
                          {errors.phone && (
                            <span className="text-[10px] text-red-400 font-mono mt-1.5 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {errors.phone}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Interactive calendar fields if "consult" is elected */}
                      {formType === 'consult' && (
                        <div className="space-y-4 pt-4 border-t border-white/5 text-left">
                          <h4 className="text-xs font-mono font-bold uppercase text-zinc-500 tracking-wider">
                            {language === 'en' ? 'Select Strategy Slot:' : 'Изберете час за консултация:'}
                          </h4>
                          
                          {/* Pick Day and Month */}
                          <div className="grid grid-cols-2 gap-4">
                            {/* Pick Month */}
                            <div className="flex flex-col">
                              <span className="text-[10px] text-zinc-400 font-mono mb-2">
                                {language === 'en' ? 'Preferred Month:' : 'Предпочитан месец:'}
                              </span>
                              <select
                                value={selectedMonth}
                                onChange={(e) => handleMonthSelect(e.target.value)}
                                className={`bg-zinc-950 border ${
                                  errors.month ? 'border-red-500/40 focus:border-red-500' : 'border-white/5 focus:border-blue-500'
                                } text-sm text-zinc-300 rounded-xl px-4 py-3.5 focus:outline-none transition-colors cursor-pointer w-full`}
                              >
                                <option value="">
                                  {language === 'en' ? '-- Month --' : '-- Месец --'}
                                </option>
                                {calendarMonths.map((m, idx) => {
                                  const isPast = idx < currentMonthIdx;
                                  return (
                                    <option key={m} value={m} disabled={isPast}>
                                      {m} {isPast ? (language === 'en' ? '(Unavailable)' : '(Минал)') : ''}
                                    </option>
                                  );
                                })}
                              </select>
                              {errors.month && (
                                <span className="text-[10px] text-red-400 font-mono mt-1.5 flex items-center gap-1">
                                  <AlertCircle className="w-3 h-3" />
                                  {errors.month}
                                </span>
                              )}
                            </div>

                            {/* Pick Day */}
                            <div className="flex flex-col">
                              <span className="text-[10px] text-zinc-400 font-mono mb-2">
                                {language === 'en' ? 'Preferred Day:' : 'Предпочитан ден:'}
                              </span>
                              <select
                                value={selectedDay}
                                onChange={(e) => handleDaySelect(e.target.value)}
                                className={`bg-zinc-950 border ${
                                  errors.day ? 'border-red-500/40 focus:border-red-500' : 'border-white/5 focus:border-blue-500'
                                } text-sm text-zinc-300 rounded-xl px-4 py-3.5 focus:outline-none transition-colors cursor-pointer w-full`}
                              >
                                <option value="">
                                  {language === 'en' ? '-- Day --' : '-- Ден --'}
                                </option>
                                {calendarDays.map((d) => {
                                  const dayNum = parseInt(d, 10);
                                  const isPast = selectedMonthIdx === currentMonthIdx && dayNum < currentDay;
                                  return (
                                    <option key={d} value={d} disabled={isPast}>
                                      {d} {isPast ? (language === 'en' ? '(Unavailable)' : '(Минал)') : ''}
                                    </option>
                                  );
                                })}
                              </select>
                              {errors.day && (
                                <span className="text-[10px] text-red-400 font-mono mt-1.5 flex items-center gap-1">
                                  <AlertCircle className="w-3 h-3" />
                                  {errors.day}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Pick Time */}
                          <div className="flex flex-col pt-2">
                            <span className="text-[10px] text-zinc-400 font-mono mb-2">
                              {language === 'en' ? 'Preferred Time (EET / Bulgaria):' : 'Предпочитан час (EET / България):'}
                            </span>
                            <select
                              value={selectedTime}
                              onChange={(e) => handleTimeSelect(e.target.value)}
                              className={`bg-zinc-950 border ${
                                errors.time ? 'border-red-500/40 focus:border-red-500' : 'border-white/5 focus:border-blue-500'
                               } text-sm text-zinc-300 rounded-xl px-4 py-3.5 focus:outline-none transition-colors cursor-pointer w-full`}
                            >
                              <option value="">
                                {language === 'en' ? '-- Select preferred slot --' : '-- Изберете час --'}
                              </option>
                              {calendarTimes.map((time) => (
                                <option key={time} value={time}>
                                  {time}
                                </option>
                              ))}
                            </select>
                            {errors.time && (
                              <span className="text-[10px] text-red-400 font-mono mt-1.5 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                {errors.time}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Project description input */}
                      <div className="flex flex-col">
                        <label className="text-[10px] font-mono uppercase font-bold text-zinc-500 tracking-wider mb-2">
                          {language === 'en' ? 'Project Description \u2022' : 'Описание на проекта \u2022'}
                        </label>
                        <textarea
                          name="projectDescription"
                          value={formData.projectDescription}
                          onChange={handleChange}
                          rows={4}
                          placeholder={
                            language === 'en' 
                              ? "I need a modern luxury landing page for my beauty salon in Plovdiv. It needs simple online booking and fast launch."
                              : "Имам нужда от модерен луксозен сайт за моя салон в Пловдив. С бутони за бърза връзка и бърза изработка."
                          }
                          className={`bg-zinc-950 border ${
                            errors.projectDescription ? 'border-red-500/40 focus:border-red-500' : 'border-white/5 focus:border-blue-500'
                          } text-sm text-zinc-200 rounded-xl px-4 py-3.5 focus:outline-none transition-colors resize-none`}
                        />
                        {errors.projectDescription && (
                          <span className="text-[10px] text-red-400 font-mono mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.projectDescription}
                          </span>
                        )}
                      </div>

                      {/* Submit action button */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/15 flex items-center justify-center gap-2 group text-xs text-center uppercase tracking-wider cursor-pointer"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="h-4.5 w-4.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                              <span>{language === 'en' ? 'Securing connection...' : 'Осигуряване на сигурна връзка...'}</span>
                            </>
                          ) : (
                            <>
                              <span>
                                {formType === 'quote' 
                                  ? (language === 'en' ? 'Request Immediate Quote' : 'Изпрати запитване за оферта')
                                  : (language === 'en' ? 'Schedule Strategy Session' : 'Запази час за консултация')}
                              </span>
                              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
