import { Link, useParams } from 'react-router-dom';
import { Construction, ArrowLeft } from 'lucide-react';
import { categories } from '@/data/categories';

/**
 * Placeholder for Phase 2+ pages.
 * Shows a "coming soon" state with navigation context.
 */
export default function ComingSoon({ title, phase, description }) {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-surface-100">
        <Construction className="h-10 w-10 text-surface-400" strokeWidth={1.5} />
      </div>
      <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">{phase}</p>
      <h1 className="mt-2 text-2xl font-bold text-surface-900 sm:text-3xl">{title}</h1>
      {description && (
        <p className="mt-3 max-w-md text-sm text-surface-500">{description}</p>
      )}
      <Link
        to="/"
        className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-primary-700 px-7 text-sm font-semibold text-white transition-all hover:bg-primary-800 active:scale-[0.98]"
      >
        <ArrowLeft size={18} /> Back to Home
      </Link>
    </div>
  );
}

/** Category page wrapper — uses ComingSoon with category context */
export function CategoryPage() {
  const { category } = useParams();
  const cat = categories.find((c) => c.id === category);

  return (
    <ComingSoon
      phase="Phase 2"
      title={cat ? cat.name : 'Category'}
      description="The product listing page with filters, sorting, and pagination is coming in Phase 2. For now, explore the homepage and product cards."
    />
  );
}
