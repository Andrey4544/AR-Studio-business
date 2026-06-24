/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Check, Trash2, X, LogIn, Clock, Star } from 'lucide-react';

export default function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [reviews, setReviews] = useState<any[]>([]);
  const [error, setError] = useState('');

  const fetchAllReviews = async () => {
    try {
      const response = await fetch('/api/admin/reviews');
      if (response.ok) {
        const data = await response.json();
        setReviews(data.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()));
      }
    } catch (error) {
      console.error('Error fetching admin reviews:', error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      if (response.ok) {
        setIsLoggedIn(true);
        fetchAllReviews();
        setError('');
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      setError('Login failed');
    }
  };

  const handleModerate = async (id: string, action: 'approve' | 'delete') => {
    try {
      const response = await fetch('/api/admin/reviews/moderate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action })
      });
      if (response.ok) {
        fetchAllReviews();
      }
    } catch (err) {
      console.error('Moderation failed:', err);
    }
  };

  // Toggle admin panel with a secret key combination or just a button for now
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Hidden Trigger (Bottom Left Corner) */}
      <div 
        className="fixed bottom-4 left-4 z-[90] opacity-0 hover:opacity-100 transition-opacity"
        onClick={() => setIsOpen(true)}
      >
        <Shield className="w-6 h-6 text-zinc-800 cursor-pointer" />
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[80vh] bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-zinc-900/50">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <h3 className="font-mono font-bold text-white uppercase tracking-widest">Review Moderation Console</h3>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {!isLoggedIn ? (
                  <div className="max-w-sm mx-auto py-20 text-center">
                    <LogIn className="w-12 h-12 text-zinc-700 mx-auto mb-6" />
                    <form onSubmit={handleLogin} className="space-y-4">
                      <input
                        autoFocus
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Admin Password"
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white text-center outline-none focus:border-blue-500/50"
                      />
                      {error && <p className="text-red-500 text-xs font-mono">{error}</p>}
                      <button className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-zinc-200 transition-colors">
                        Unlock Console
                      </button>
                      <p className="text-[10px] text-zinc-600 font-mono mt-4">
                        AUTHORIZED ACCESS ONLY • AR STUDIO INTERNAL
                      </p>
                    </form>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {reviews.length === 0 ? (
                      <div className="text-center py-20 text-zinc-600 font-mono">
                        NO REVIEWS FOUND IN DATABASE
                      </div>
                    ) : (
                      reviews.map((review) => (
                        <div 
                          key={review.id} 
                          className={`p-5 rounded-2xl border transition-all ${
                            review.status === 'pending' 
                              ? 'bg-amber-500/5 border-amber-500/20' 
                              : 'bg-zinc-900/30 border-white/5'
                          }`}
                        >
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="font-bold text-white">{review.name}</span>
                                <span className="text-xs text-zinc-500">{review.role} @ {review.company}</span>
                                {review.status === 'pending' && (
                                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-mono font-bold uppercase">
                                    <Clock className="w-3 h-3" /> Pending
                                  </span>
                                )}
                              </div>
                              <div className="flex gap-1 mb-3">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                                ))}
                              </div>
                              <p className="text-zinc-400 text-sm italic">"{review.text}"</p>
                              <p className="text-[10px] text-zinc-600 font-mono mt-3">
                                ID: {review.id} • {new Date(review.timestamp).toLocaleString()}
                              </p>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              {review.status === 'pending' && (
                                <button
                                  onClick={() => handleModerate(review.id, 'approve')}
                                  className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-500 border border-green-500/20 rounded-xl hover:bg-green-500/20 transition-all text-xs font-bold"
                                >
                                  <Check className="w-4 h-4" /> Approve
                                </button>
                              )}
                              <button
                                onClick={() => handleModerate(review.id, 'delete')}
                                className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl hover:bg-red-500/20 transition-all text-xs font-bold"
                              >
                                <Trash2 className="w-4 h-4" /> Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
