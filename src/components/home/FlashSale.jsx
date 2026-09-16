import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Clock } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { ProductCardSkeleton } from '@/components/common/Skeleton';
import { productService } from '@/services/productService';

function useCountdown(hoursFromNow = 8) {
  const [target] = useState(() => {
    const stored = localStorage.getItem('shopsphere_flash_end');
    if (stored) {
      const t = parseInt(stored, 10);
      if (t > Date.now()) return t;
    }
    const t = Date.now() + hoursFromNow * 60 * 60 * 1000;
    localStorage.setItem('shopsphere_flash_end', String(t));
    return t;
  });

  const [timeLeft, setTimeLeft] = useState(target - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = target - Date.now();
      setTimeLeft(remaining > 0 ? remaining : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
}

function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-900 font-mono text-lg font-bold text-white tabular-nums sm:h-12 sm:w-12 sm:text-xl">
        {String(value).padStart(2, '0')}
      </div>
      <span className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-surface-500">{label}</span>
    </div>
  );
}

export default function FlashSale() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { hours, minutes, seconds } = useCountdown(8);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const data = await productService.getFlashSale();
        if (active) setProducts(data);
      } catch {
        /* ignore */
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  return (
    <section className="bg-gradient-to-br from-secondary-50 to-white py-12 lg:py-16">
      <div className="container-page">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-500 text-white shadow-md">
              <Zap size={24} className="fill-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-surface-900 sm:text-3xl">Flash Sale</h2>
              <p className="mt-0.5 text-sm text-surface-500">Limited time deals — hurry up!</p>
            </div>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-3">
            <Clock size={18} className="text-secondary-600" />
            <div className="flex items-center gap-2">
              <TimeBox value={hours} label="Hrs" />
              <span className="text-xl font-bold text-surface-300">:</span>
              <TimeBox value={minutes} label="Min" />
              <span className="text-xl font-bold text-surface-300">:</span>
              <TimeBox value={seconds} label="Sec" />
            </div>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
