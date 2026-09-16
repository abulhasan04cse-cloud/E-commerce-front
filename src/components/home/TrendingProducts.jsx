import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { ProductCardSkeleton } from '@/components/common/Skeleton';
import { productService } from '@/services/productService';

export default function TrendingProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const data = await productService.getTrending(8);
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
    <section className="container-page py-12 lg:py-16">
      <div className="mb-8 flex items-end justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
            <TrendingUp size={20} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-surface-900 sm:text-3xl">Trending Now</h2>
            <p className="mt-0.5 text-sm text-surface-500">What everyone's talking about</p>
          </div>
        </div>
        <Link
          to="/products?sort=popularity"
          className="hidden text-sm font-semibold text-primary-700 hover:text-primary-800 sm:block"
        >
          View all →
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

      <div className="mt-8 text-center sm:hidden">
        <Link
          to="/products"
          className="inline-flex h-11 items-center gap-2 rounded-xl border-2 border-surface-200 px-6 text-sm font-semibold text-surface-700"
        >
          View All Products <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
