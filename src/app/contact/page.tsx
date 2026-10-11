'use client';

import { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Footer } from '@/components/Footer';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden">
      <PageHero title="Contact Us" subtitle="We'd love to hear from you. Send us an enquiry below." />

      <section className="relative bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 grid md:grid-cols-[1fr_1.4fr] gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-['Roboto_Serif',serif] font-bold text-[#2a1710] text-2xl md:text-3xl mb-3">
                Get In Touch
              </h2>
              <p className="font-['Roboto',sans-serif] text-gray-500 text-sm md:text-base leading-relaxed">
                Have a question about our flavours, franchising, or anything else? Fill out the
                form and our team will get back to you.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0 w-11 h-11 rounded-full bg-[#fdeee9] text-[#a9674f] flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-semibold text-[#2a1710] text-sm">Address</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Mecoca Group <br />
                  Cheriyavelinalloor. P.O, Roadvila <br />
                  Kollam 691516
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0 w-11 h-11 rounded-full bg-[#fdeee9] text-[#a9674f] flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-semibold text-[#2a1710] text-sm">Phone</p>
                <p className="text-sm text-gray-500">+91- 8282825230 (Kerala)</p>
                <p className="text-sm text-gray-500">+91- 9790525565 (Tamilnadu)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0 w-11 h-11 rounded-full bg-[#fdeee9] text-[#a9674f] flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-semibold text-[#2a1710] text-sm">Email</p>
                <p className="text-sm text-gray-500">mecocagroup@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#fff8f6] border border-black/5 rounded-3xl p-6 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2a1710] mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-[#2a1710] outline-none focus:ring-2 focus:ring-[#4c3026]/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#2a1710] mb-1.5">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-[#2a1710] outline-none focus:ring-2 focus:ring-[#4c3026]/30"
                  placeholder="+91 00000 00000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#2a1710] mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-[#2a1710] outline-none focus:ring-2 focus:ring-[#4c3026]/30"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#2a1710] mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-[#2a1710] outline-none focus:ring-2 focus:ring-[#4c3026]/30 resize-none"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#4c3026] text-white font-medium px-6 py-3 rounded-full hover:bg-[#3a241c] transition-colors disabled:opacity-60"
            >
              {status === 'loading' ? (
                'Sending...'
              ) : (
                <>
                  Send Enquiry
                  <Send size={16} />
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                <CheckCircle2 size={16} />
                Thanks! Your enquiry has been sent.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-rose-600 font-medium">{errorMessage}</p>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
