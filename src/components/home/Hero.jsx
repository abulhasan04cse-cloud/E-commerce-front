import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Truck, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/36764844/pexels-photo-36764844.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-900 via-surface-900/85 to-surface-900/30" />
      </div>

      {/* Content */}
      <div className="container-page relative flex min-h-[480px] items-center py-16 sm:min-h-[520px] lg:min-h-[600px] lg:py-24">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-500/15 px-4 py-2 text-sm font-semibold text-primary-300 ring-1 ring-primary-500/30 animate-fade-in-up">
            <Sparkles size={16} />
            New Season Collection 2026
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
            Shop Everything,
            <br />
            <span className="text-primary-400">Everywhere.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base text-surface-300 sm:text-lg lg:text-xl animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
            Discover thousands of products across electronics, fashion, home essentials, and more. Fast delivery, unbeatable prices.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
            <Link
              to="/products"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary-600 px-7 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-500 active:scale-[0.98] sm:h-14 sm:px-8"
            >
              Shop Now
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/category/electronics"
              className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-white/30 px-7 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10 active:scale-[0.98] sm:h-14 sm:px-8"
            >
              Explore Deals
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
            <TrustBadge icon={Truck} text="Free shipping over $50" />
            <TrustBadge icon={ShieldCheck} text="Secure checkout" />
          </div>
        </div>
      </div>

      {/* Decorative floating stats */}
      <div className="container-page relative hidden pb-8 lg:block">
        <div className="ml-auto flex max-w-md gap-4">
          <StatCard value="10K+" label="Products" />
          <StatCard value="500K+" label="Happy Customers" />
          <StatCard value="4.8★" label="Average Rating" />
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 text-sm text-surface-300">
      <Icon size={18} className="text-primary-400" />
      {text}
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md ring-1 ring-white/15">
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-surface-300">{label}</p>
    </div>
  );
}
