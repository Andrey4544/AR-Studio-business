/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ReviewFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

interface FormError {
  field: string;
  message: string;
}

export default function ReviewForm({ isOpen, onClose, onSuccess }: ReviewFormProps) {
  const { language } = useLanguage();
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    text: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<FormError[]>([]);

  const validateForm = (): FormError[] => {
    const newErrors: FormError[] = [];
    
    if (!formData.name.trim()) {
      newErrors.push({ 
        field: 'name', 
        message: language === 'en' ? 'Name is required' : 'Име е задължително' 
      });
    }
    
    if (!formData.company.trim()) {
      newErrors.push({ 
        field: 'company', 
        message: language === 'en' ? 'Company is required' : 'Фирма е задължителна' 
      });
    }
    
    if (!formData.role.trim()) {
      newErrors.push({ 
        field: 'role', 
        message: language === 'en' ? 'Role is required' : 'Длъжност е задължителна' 
      });
    }
    
    if (!formData.text.trim()) {
      newErrors.push({ 
        field: 'text', 
        message: language === 'en' ? 'Review text is required' : 'Текстът на отзива е задължителен' 
      });
    } else if (formData.text.trim().length < 10) {
      newErrors.push({ 
        field: 'text', 
        message: language === 'en' ? 'Review must be at least 10 characters' : 'Отзивът трябва да е поне 10 символа' 
      });
    }
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, rating })
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onSuccess();
          onClose();
          setIsSuccess(false);
          setFormData({ name: '', role: '', company: '', text: '' });
          setRating(5);
          setErrors([]);
        }, 3000);
      } else {
        setErrors([{ 
          field: 'submit', 
          message: language === 'en' 
            ? 'Failed to submit review. Please try again.' 
            : 'Неудачно изпращане. Опитайте отново.' 
        }]);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      setErrors([{ 
        field: 'submit', 
        message: language === 'en' 
          ? 'An error occurred. Please try again.' 
          : 'Възникна грешка. Опитайте отново.' 
      }]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-zinc-950 border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] pointer-events-none" />

            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {isSuccess ? (
              <div className="py-12 text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {language === 'en' ? 'Thank You!' : 'Благодарим Ви!'}
                </h3>
                <p className="text-zinc-400">
                  {language === 'en' 
                    ? 'Your review has been submitted for moderation and will appear soon.' 
                    : 'Вашият отзив беше изпратен за одобрение и ще се появи скоро.'}
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">
                    {language === 'en' ? 'Share Your Experience' : 'Споделете Вашето мнение'}
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    {language === 'en' 
                      ? 'Your feedback helps us grow and serve you better.' 
                      : 'Вашата обратна връзка ни помага да се развиваме.'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Error Messages */}
                  {errors.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 space-y-2"
                    >
                      {errors.map((err, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                          <p className="text-red-400 text-xs font-mono">
                            {err.message}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* Star Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-zinc-500 mr-2">
                      {language === 'en' ? 'Rating:' : 'Оценка:'}
                    </span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="p-1 transition-transform hover:scale-110"
                          onMouseEnter={() => setHover(star)}
                          onMouseLeave={() => setHover(0)}
                          onClick={() => setRating(star)}
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= (hover || rating)
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-zinc-700'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-500 uppercase">
                        {language === 'en' ? 'Full Name' : 'Вашето име'}
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full bg-zinc-900/50 border rounded-xl px-4 py-3 text-white focus:ring-1 outline-none transition-all ${
                          errors.some(e => e.field === 'name')
                            ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50'
                            : 'border-white/5 focus:border-blue-500/50 focus:ring-blue-500/50'
                        }`}
                        placeholder="Ivan Georgiev"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-500 uppercase">
                        {language === 'en' ? 'Company' : 'Фирма'}
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={`w-full bg-zinc-900/50 border rounded-xl px-4 py-3 text-white focus:ring-1 outline-none transition-all ${
                          errors.some(e => e.field === 'company')
                            ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50'
                            : 'border-white/5 focus:border-blue-500/50 focus:ring-blue-500/50'
                        }`}
                        placeholder="Aura Salon"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-500 uppercase">
                      {language === 'en' ? 'Role / Title' : 'Длъжност'}
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className={`w-full bg-zinc-900/50 border rounded-xl px-4 py-3 text-white focus:ring-1 outline-none transition-all ${
                        errors.some(e => e.field === 'role')
                          ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50'
                          : 'border-white/5 focus:border-blue-500/50 focus:ring-blue-500/50'
                      }`}
                      placeholder="Manager"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-500 uppercase">
                      {language === 'en' ? 'Your Review' : 'Вашият коментар'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.text}
                      onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                      className={`w-full bg-zinc-900/50 border rounded-xl px-4 py-3 text-white focus:ring-1 outline-none transition-all resize-none ${
                        errors.some(e => e.field === 'text')
                          ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50'
                          : 'border-white/5 focus:border-blue-500/50 focus:ring-blue-500/50'
                      }`}
                      placeholder={language === 'en' ? 'Tell us what you think...' : 'Разкажете ни за Вашето преживяване...'}
                    />
                    <p className="text-[10px] text-zinc-600">
                      {formData.text.length}/500 {language === 'en' ? 'characters' : 'символа'}
                    </p>
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 group"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">{language === 'en' ? 'Submitting...' : 'Изпраща се...'}</span>
                    ) : (
                      <>
                        <span>{language === 'en' ? 'Submit Review' : 'Изпрати отзив'}</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
