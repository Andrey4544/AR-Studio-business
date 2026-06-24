/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Check, Trash2, X, LogIn, Clock, Star, LogOut, RefreshCw } from 'lucide-react';

export default function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [reviews, setReviews] = useState<any[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'approved'>('all');

  const fetchAllReviews = async () => {
    if (!token) return;
    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/reviews', {
        headers: { 'x-admin-token': token }
      });
      if (response.ok) {
        const data = await response.json();
        setReviews(data.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()));
      } else if (response.status === 401) {
        setIsLoggedIn(false);
        setToken('');
        setError('Session expired. Please login again.');
      }
    } catch (error) {
      console.error('Error fetching admin reviews:', error);
      setError('Failed to fetch reviews');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setIsLoggedIn(true);
        setPassword('');
        setError('');
        setTimeout(() => fetchAllReviews(), 100);
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
        headers: { 
          'Content-Type': 'application/json',
          'x-admin-token': token
        },
        body: JSON.stringify({ id, action })
      });
      if (response.ok) {
        fetchAllReviews();
      } else if (response.status === 401) {
        setIsLoggedIn(false);
        setToken('');
        setError('Session expired. Please login again.');
      }
    } catch (err) {
      console.error('Moderation failed:', err);
      setError('Failed to moderate review');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken('');
    setPassword('');
    setReviews([]);
    setError('');
  };

  // Toggle admin panel with a secret key combination
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredReviews = reviews.filter(r => {
    if (filterStatus === 'all') return true;
    return r.status === filterStatus;
  });

  const pendingCount = reviews.filter(r => r.status === 'pending').length;
  const approvedCount = reviews.filter(r => r.status === 'approved').length;

  return (
    <>
      {/* Admin Trigger Button */}
      <div className="fixed bottom-6 right-6 z-[90]">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-zinc-500 hover:text-blue-400 hover:border-blue-500/30 transition-all shadow-2xl"
          title="Admin Panel (Ctrl+Shift+A)"
        >
          <Shield className="w-5 h-5" />
          {pendingCount > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {pendingCount}
            </span>
          )}
        </motion.button>
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
              {/* Header */}
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-zinc-900/50">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <h3 className="font-mono font-bold text-white uppercase tracking-widest">Review Moderation Console</h3>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {!isLoggedIn ? (
                  /* Login Form */
                  <div className="max-w-sm mx-auto py-20 text-center">
                    <LogIn className="w-12 h-12 text-zinc-700 mx-auto mb-6" />
                    <form onSubmit={handleLogin} className="space-y-4">
                      <input
                        autoFocus
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Admin Password"
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white text-center outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
                      />
                      {error && (
                        <p className="text-red-500 text-xs font-mono bg-red-500/10 p-2 rounded">
                          ⚠️ {error}
                        </p>
                      )}
                      <button 
                        type="submit"
                        className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-zinc-200 transition-colors"
                      >
                        Unlock Console
                      </button>
                      <p className="text-[10px] text-zinc-600 font-mono mt-4">
                        AUTHORIZED ACCESS ONLY • AR STUDIO INTERNAL
                      </p>
                    </form>
                  </div>
                ) : (
                  /* Reviews List */
                  <div className="space-y-4">
                    {/* Stats & Controls */}
                    <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-zinc-900/30 rounded-xl border border-white/5">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">{reviews.length}</p>
                        <p className="text-xs text-zinc-500 font-mono">Total Reviews</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-amber-400">{pendingCount}</p>
                        <p className="text-xs text-zinc-500 font-mono">Pending</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-400">{approvedCount}</p>
                        <p className="text-xs text-zinc-500 font-mono">Approved</p>
                      </div>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex gap-2 mb-4">
                      <button
                        onClick={() => setFilterStatus('all')}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                          filterStatus === 'all'
                            ? 'bg-blue-500 text-white'
                            : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
                        }`}
                      >
                        All
                      </button>
                      <button
                        onClick={() => setFilterStatus('pending')}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                          filterStatus === 'pending'
                            ? 'bg-amber-500 text-white'
                            : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
                        }`}
                      >
                        Pending ({pendingCount})
                      </button>
                      <button
                        onClick={() => setFilterStatus('approved')}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                          filterStatus === 'approved'
                            ? 'bg-green-500 text-white'
                            : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
                        }`}
                      >
                        Approved ({approvedCount})
                      </button>
                      <button
                        onClick={() => fetchAllReviews()}
                        disabled={isLoading}
                        className="ml-auto px-4 py-2 bg-zinc-900 text-zinc-400 hover:bg-zinc-800 rounded-lg text-xs font-bold transition-all disabled:opacity-50 flex items-center gap-2"
                      >
                        <RefreshCw className={`w-3 h-3 ${isLoading ? 'animate-spin' : ''}`} />
                        Refresh
                      </button>
                    </div>

                    {/* Reviews */}
                    {filteredReviews.length === 0 ? (
                      <div className="text-center py-20 text-zinc-600 font-mono">
                        {reviews.length === 0 ? 'NO REVIEWS FOUND IN DATABASE' : 'NO REVIEWS MATCH FILTER'}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {filteredReviews.map((review) => (
                          <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`p-5 rounded-2xl border transition-all ${
                              review.status === 'pending'
                                ? 'bg-amber-500/5 border-amber-500/20 hover:border-amber-500/30'
                                : 'bg-zinc-900/30 border-white/5 hover:border-white/10'
                            }`}
                          >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2 flex-wrap">
                                  <span className="font-bold text-white">{review.name}</span>
                                  <span className="text-xs text-zinc-500">{review.role} @ {review.company}</span>
                                  {review.status === 'pending' && (
                                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-mono font-bold uppercase">
                                      <Clock className="w-3 h-3" /> Pending
                                    </span>
                                  )}
                                  {review.status === 'approved' && (
                                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-[10px] font-mono font-bold uppercase">
                                      <Check className="w-3 h-3" /> Approved
                                    </span>
                                  )}
                                </div>
                                <div className="flex gap-1 mb-3">
                                  {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                                  ))}
                                </div>
                                <p className="text-zinc-300 text-sm italic mb-3">"{review.text}"</p>
                                <p className="text-[10px] text-zinc-600 font-mono">
                                  ID: {review.id} • {new Date(review.timestamp).toLocaleString()}
                                </p>
                              </div>

                              <div className="flex items-center gap-2 flex-shrink-0">
                                {review.status === 'pending' && (
                                  <button
                                    onClick={() => handleModerate(review.id, 'approve')}
                                    className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-500 border border-green-500/20 rounded-xl hover:bg-green-500/20 transition-all text-xs font-bold whitespace-nowrap"
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
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer */}
              {isLoggedIn && (
                <div className="p-4 border-t border-white/5 bg-zinc-900/30 flex justify-between items-center">
                  <p className="text-[10px] text-zinc-600 font-mono">
                    Logged in • Session active
                  </p>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 rounded-lg text-xs font-bold transition-all"
                  >
                    <LogOut className="w-3 h-3" /> Logout
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
