'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-24 text-center bg-base-100">
      <div className="container mx-auto px-4">
        <div className="card bg-gradient-to-br from-neutral via-neutral-focus to-neutral text-neutral-content shadow-2xl overflow-hidden max-w-5xl mx-auto border border-neutral-content/10">
          <div className="card-body p-12 lg:p-16 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -mr-36 -mt-36"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -ml-36 -mb-36"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="inline-block">
                <div className="badge badge-accent badge-lg gap-2">
                  <span className="text-lg">📧</span>
                  Newsletter
                </div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-extrabold">Stay in the Loop</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
                Get weekly updates on fresh arrivals, exclusive recipes, seasonal produce guides, and <span className="text-accent font-bold">15% off</span> your first order.
              </p>
              
              {subscribed ? (
                <div className="alert alert-success max-w-md mx-auto shadow-lg animate-slide-up">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Thank you! Check your inbox for a welcome gift 🎁</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="join max-w-lg mx-auto w-full shadow-2xl">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="input input-bordered input-lg join-item w-full text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn btn-primary btn-lg join-item px-8 hover:scale-105 transition-transform">
                    Subscribe
                  </button>
                </form>
              )}

              <p className="text-sm opacity-70 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
