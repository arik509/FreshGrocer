'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate form submission
  };

  return (
    <div className="min-h-screen bg-base-200 py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-extrabold mb-4">Get in Touch</h1>
            <p className="text-lg text-base-content/80">
              Have a question about your order, or just want to say hello? We'd love to hear from you.
            </p>
          </div>
          
          <div className="card bg-base-100 shadow-xl">
             <div className="card-body">
                <h3 className="card-title text-primary mb-4">Support HQ</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">📍</div>
                    <div>
                      <p className="font-bold">Address</p>
                      <p className="text-sm opacity-70">123 Green Market St, Food City, FC 90210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">📧</div>
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-sm opacity-70">hello@freshgrocer.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">📞</div>
                    <div>
                      <p className="font-bold">Phone</p>
                      <p className="text-sm opacity-70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body p-8">
            {submitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-2xl font-bold text-success mb-2">Message Sent!</h3>
                <p className="text-base-content/70">Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="btn btn-ghost mt-6"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input type="text" placeholder="John" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <input type="text" placeholder="Doe" className="input input-bordered" required />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="john@example.com" className="input input-bordered" required />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Subject</span>
                  </label>
                  <select className="select select-bordered" defaultValue="">
                    <option value="" disabled>Select a topic</option>
                    <option>Order Issue</option>
                    <option>General Inquiry</option>
                    <option>Partnership</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea className="textarea textarea-bordered h-32" placeholder="How can we help you?" required></textarea>
                </div>

                <div className="form-control mt-4">
                  <button type="submit" className="btn btn-primary w-full shadow-lg">Send Message</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
