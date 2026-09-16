import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { ProductCardSkeleton } from '@/components/common/Skeleton';
import { productService } from '@/services/productService';

export default function BestSellers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const data = await productService.getBestSellers(10);
        if (active) setProducts(data);
      } catch {
        /* ignore */
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="bg-surface-50 py-12 lg:py-16">
      <div className="container-page">
        <div className="mb-8 flex items-end justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-warning-100 text-warning-600">
              <Award size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-surface-900 sm:text-3xl">Best Sellers</h2>
              <p className="mt-0.5 text-sm text-surface-500">Customer favorites this month</p>
            </div>
          </div>

          {/* Scroll controls */}
          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={() => scroll('left')}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-surface-200 bg-white text-surface-600 transition-all hover:border-primary-500 hover:text-primary-700"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-surface-200 bg-white text-surface-600 transition-all hover:border-primary-500 hover:text-primary-700"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel — full width for edge-to-edge scroll */}
      <div
        ref={scrollRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-8"
      >
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-44 shrink-0 snap-start sm:w-56 lg:w-64">
                <ProductCardSkeleton />
              </div>
            ))
          : products.map((p) => (
              <div key={p.id} className="w-44 shrink-0 snap-start sm:w-56 lg:w-64">
                <ProductCard product={p} />
              </div>
            ))}
      </div>
    </section>
  );
}
