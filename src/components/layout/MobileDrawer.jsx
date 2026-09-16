import { Link } from 'react-router-dom';
import { X, Home, LayoutGrid, Package, Heart, User, Settings, LogOut, ShoppingCart } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { categories } from '@/data/categories';

export default function MobileDrawer({ open, onClose }) {
  const { isAuthenticated, user, logout } = useAuth();
  const { cartCount } = useCart();
  const { count: wishCount } = useWishlist();

  const handleLogout = async () => {
    await logout();
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-surface-900/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed bottom-0 left-0 top-0 z-[70] flex w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-surface-100 p-4">
          <Link to="/" onClick={onClose} className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-700 text-white">
              <ShoppingCart size={18} />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-surface-900">
              Shop<span className="text-primary-700">Sphere</span>
            </span>
          </Link>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-surface-600 hover:bg-surface-100"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* User info */}
        {isAuthenticated ? (
          <div className="border-b border-surface-100 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div className="min-w-0">
                <p className="truncate font-semibold text-surface-800">{user?.name}</p>
                <p className="truncate text-xs text-surface-400">{user?.email}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="border-b border-surface-100 p-4">
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/login"
                onClick={onClose}
                className="flex h-11 items-center justify-center rounded-xl border-2 border-surface-200 text-sm font-semibold text-surface-700"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={onClose}
                className="flex h-11 items-center justify-center rounded-xl bg-primary-700 text-sm font-semibold text-white"
              >
                Register
              </Link>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-2">
          <NavItem to="/" icon={Home} label="Home" onClick={onClose} />
          <NavItem to="/products" icon={LayoutGrid} label="All Products" onClick={onClose} />

          <p className="px-4 py-2 pt-4 text-xs font-semibold uppercase tracking-wide text-surface-400">
            Categories
          </p>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              onClick={onClose}
              className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-surface-700 transition-colors hover:bg-surface-50"
            >
              <cat.icon size={18} className="text-surface-400" />
              {cat.name}
            </Link>
          ))}

          <p className="px-4 py-2 pt-4 text-xs font-semibold uppercase tracking-wide text-surface-400">
            Account
          </p>
          <NavItem to="/account/orders" icon={Package} label="My Orders" onClick={onClose} badge={null} />
          <NavItem to="/wishlist" icon={Heart} label="Wishlist" onClick={onClose} badge={wishCount} />
          <NavItem to="/cart" icon={ShoppingCart} label="Cart" onClick={onClose} badge={cartCount} />
          {isAuthenticated && (
            <>
              <NavItem to="/account" icon={User} label="My Profile" onClick={onClose} />
              <NavItem to="/account/addresses" icon={Settings} label="Addresses" onClick={onClose} />
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left text-sm font-medium text-error-600 transition-colors hover:bg-error-50"
              >
                <LogOut size={18} className="text-error-500" />
                Logout
              </button>
            </>
          )}
        </nav>
      </aside>
  </>
  );
}

function NavItem({ to, icon: Icon, label, onClick, badge }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-surface-700 transition-colors hover:bg-surface-50"
    >
      <Icon size={18} className="text-surface-400" />
      <span className="flex-1">{label}</span>
      {badge != null && badge > 0 && (
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-100 px-1.5 text-[10px] font-bold text-primary-700">
          {badge}
        </span>
      )}
    </Link>
  );
}
