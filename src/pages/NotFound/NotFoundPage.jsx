import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-8xl font-extrabold text-primary-700 sm:text-9xl">404</p>
      <h1 className="mt-4 text-2xl font-bold text-surface-900 sm:text-3xl">Page Not Found</h1>
      <p className="mt-3 max-w-md text-surface-500">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary-700 px-7 text-sm font-semibold text-white transition-all hover:bg-primary-800 active:scale-[0.98]"
        >
          <Home size={18} /> Back to Home
        </Link>
        <Link
          to="/products"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-surface-200 px-7 text-sm font-semibold text-surface-700 transition-all hover:border-primary-500 hover:text-primary-700"
        >
          <Search size={18} /> Browse Products
        </Link>
      </div>
    </div>
  );
}
