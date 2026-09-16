import { Link } from 'react-router-dom';
import { categories } from '@/data/categories';

export default function CategoryGrid() {
  return (
    <section className="container-page py-12 lg:py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-surface-900 sm:text-3xl">Shop by Category</h2>
          <p className="mt-1 text-sm text-surface-500">Find exactly what you're looking for</p>
        </div>
        <Link
          to="/products"
          className="hidden text-sm font-semibold text-primary-700 hover:text-primary-800 sm:block"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-5">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={cat.href}
            className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-surface-200 bg-white p-5 transition-all duration-300 hover:shadow-card-hover hover:border-surface-300 active:scale-[0.97]"
          >
            <div className={`mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.color} shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16`}>
              <cat.icon className="h-7 w-7 text-white sm:h-8 sm:w-8" strokeWidth={1.8} />
            </div>
            <p className="text-center text-xs font-semibold text-surface-700 sm:text-sm">
              {cat.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
