import { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast('Please enter a valid email address', { type: 'warning' });
      return;
    }
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    toast('Successfully subscribed to our newsletter!', { type: 'success' });
    setEmail('');
  };

  return (
    <section className="container-page py-12 lg:py-16">
      <div className="relative overflow-hidden rounded-3xl bg-primary-800 px-6 py-12 text-center shadow-lg sm:px-12 sm:py-16">
        {/* Decorative circles */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-700/40" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-primary-600/30" />

        <div className="relative mx-auto max-w-xl">
          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
            <Mail size={26} />
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {submitted ? 'You\'re In!' : 'Stay in the Loop'}
          </h2>
          <p className="mt-3 text-sm text-primary-100 sm:text-base">
            {submitted
              ? 'Thanks for subscribing! Watch your inbox for exclusive deals and new arrivals.'
              : 'Subscribe to get exclusive deals, new arrivals, and insider updates — straight to your inbox.'}
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="h-12 flex-1 rounded-xl border-0 bg-white px-4 text-sm font-medium text-surface-800 placeholder:text-surface-400 focus:ring-2 focus:ring-primary-400"
                aria-label="Email address"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-secondary-500 px-6 text-sm font-semibold text-white transition-all hover:bg-secondary-600 active:scale-[0.98] disabled:opacity-60"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          ) : (
            <button
              onClick={() => setSubmitted(false)}
              className="mt-7 inline-flex h-12 items-center gap-2 rounded-xl bg-white/15 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/25"
            >
              <Check size={18} /> Subscribe another email
            </button>
          )}

          <p className="mt-4 text-xs text-primary-200">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
