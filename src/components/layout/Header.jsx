import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search, ShoppingCart, Heart, User, Menu, X,
  ChevronDown, MapPin, Package, LogOut, Settings,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useAuth } from '@/context/AuthContext';
import { categories } from '@/data/categories';
import { products as allProducts } from '@/data/products';

export default function Header({ onMenuClick }) {
  const { cartCount } = useCart();
  const { count: wishCount } = useWishlist();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('shopsphere_recent_searches')) || [];
    } catch {
      return [];
    }
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);

  // Generate suggestions
  useEffect(() => {
    if (!searchValue || searchValue.length < 2) {
      setSuggestions([]);
      return;
    }
    const q = searchValue.toLowerCase();
    const matches = allProducts
      .filter((p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q))
      .slice(0, 5);
    setSuggestions(matches);
  }, [searchValue]);

  // Close search dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchFocused(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSearch = (e, term) => {
    e?.preventDefault();
    const query = term || searchValue.trim();
    if (!query) return;
    // Save to recent
    const updated = [query, ...recentSearches.filter((s) => s !== query)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('shopsphere_recent_searches', JSON.stringify(updated));
    setSearchFocused(false);
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const clearSearch = () => {
    setSearchValue('');
    setSuggestions([]);
  };

  const handleLogout = async () => {
    await logout();
    setDropdownOpen(false);
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="hidden border-b border-surface-100 bg-surface-900 text-surface-300 lg:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-primary-400" />
            <span>Deliver to: <span className="font-medium text-white">New York 10001</span></span>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/account/orders" className="transition-colors hover:text-white">Track Order</Link>
            <Link to="/account" className="transition-colors hover:text-white">My Account</Link>
            <span className="text-surface-600">|</span>
            <span>Free shipping on orders over $50</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-page flex h-16 items-center gap-3 lg:h-20 lg:gap-6">
        {/* Mobile hamburger */}
        <button
          onClick={onMenuClick}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-surface-700 hover:bg-surface-100 lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="ShopSphere home">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-700 text-white shadow-sm lg:h-10 lg:w-10">
            <ShoppingCart size={20} />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-surface-900 lg:text-2xl">
            Shop<span className="text-primary-700">Sphere</span>
          </span>
        </Link>

        {/* Search — desktop */}
        <div ref={searchRef} className="relative hidden flex-1 lg:block">
          <form onSubmit={handleSearch} className="relative">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-surface-400"
            />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              placeholder="Search products, brands and categories..."
              className="h-11 w-full rounded-xl border-2 border-surface-200 bg-surface-50 pl-11 pr-10 text-sm font-medium text-surface-800 transition-all placeholder:text-surface-400 focus:border-primary-500 focus:bg-white"
              aria-label="Search products"
            />
            {searchValue && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-surface-400 hover:bg-surface-200 hover:text-surface-600"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </form>

          {/* Search dropdown */}
          {searchFocused && (
            <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-96 overflow-y-auto rounded-xl border border-surface-200 bg-white py-2 shadow-card-hover animate-scale-in">
              {/* Suggestions */}
              {suggestions.length > 0 && (
                <div className="mb-2">
                  <p className="px-4 py-1 text-xs font-semibold uppercase tracking-wide text-surface-400">
                    Products
                  </p>
                  {suggestions.map((p) => (
                    <Link
                      key={p.id}
                      to={`/products/${p.id}`}
                      onClick={() => setSearchFocused(false)}
                      className="flex items-center gap-3 px-4 py-2 transition-colors hover:bg-surface-50"
                    >
                      <img src={p.images[0]} alt="" className="h-10 w-10 rounded-lg object-cover" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-surface-800">{p.name}</p>
                        <p className="text-xs text-surface-400">{p.brand}</p>
                      </div>
                      <span className="text-sm font-semibold text-primary-700">
                        ${p.price.toFixed(2)}
                      </span>
                    </Link>
                  ))}
                </div>
              )}

              {/* Recent searches */}
              {searchValue.length < 2 && recentSearches.length > 0 && (
                <div className="mb-2">
                  <p className="px-4 py-1 text-xs font-semibold uppercase tracking-wide text-surface-400">
                    Recent Searches
                  </p>
                  {recentSearches.map((s) => (
                    <button
                      key={s}
                      onClick={(e) => {
                        setSearchValue(s);
                        handleSearch(e, s);
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-surface-600 transition-colors hover:bg-surface-50"
                    >
                      <Search size={14} className="text-surface-400" />
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {/* Popular searches */}
              {searchValue.length < 2 && (
                <div>
                  <p className="px-4 py-1 text-xs font-semibold uppercase tracking-wide text-surface-400">
                    Popular Searches
                  </p>
                  {['Headphones', 'Sneakers', 'Smartwatch', 'Laptop', 'Sunglasses'].map((s) => (
                    <button
                      key={s}
                      onClick={(e) => {
                        setSearchValue(s);
                        handleSearch(e, s);
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-surface-600 transition-colors hover:bg-surface-50"
                    >
                      <Search size={14} className="text-surface-400" />
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-1 sm:gap-2 lg:ml-0">
          {/* Search icon — mobile */}
          <button
            onClick={() => navigate('/search')}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-surface-700 hover:bg-surface-100 lg:hidden"
            aria-label="Search"
          >
            <Search size={22} />
          </button>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-surface-700 transition-colors hover:bg-surface-100"
            aria-label={`Wishlist (${wishCount} items)`}
          >
            <Heart size={22} />
            {wishCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-error-500 px-1 text-[10px] font-bold text-white">
                {wishCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-surface-700 transition-colors hover:bg-surface-100"
            aria-label={`Cart (${cartCount} items)`}
          >
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-700 px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Account — desktop */}
          {isAuthenticated ? (
            <div ref={dropdownRef} className="relative hidden lg:block">
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex h-11 items-center gap-2 rounded-xl px-3 text-sm font-medium text-surface-700 transition-colors hover:bg-surface-100"
                aria-label="Account menu"
                aria-expanded={dropdownOpen}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </div>
                <span className="max-w-24 truncate">{user?.name?.split(' ')[0]}</span>
                <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-xl border border-surface-200 bg-white py-2 shadow-card-hover animate-scale-in">
                  <div className="border-b border-surface-100 px-4 py-2">
                    <p className="text-sm font-semibold text-surface-800">{user?.name}</p>
                    <p className="truncate text-xs text-surface-400">{user?.email}</p>
                  </div>
                  <DropdownLink to="/account" icon={User} label="My Profile" onClick={() => setDropdownOpen(false)} />
                  <DropdownLink to="/account/orders" icon={Package} label="My Orders" onClick={() => setDropdownOpen(false)} />
                  <DropdownLink to="/wishlist" icon={Heart} label="Wishlist" onClick={() => setDropdownOpen(false)} />
                  <DropdownLink to="/account/addresses" icon={MapPin} label="Addresses" onClick={() => setDropdownOpen(false)} />
                  <DropdownLink to="/account" icon={Settings} label="Settings" onClick={() => setDropdownOpen(false)} />
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-medium text-error-600 transition-colors hover:bg-error-50"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden items-center gap-2 lg:flex">
              <Link
                to="/login"
                className="flex h-10 items-center rounded-xl px-4 text-sm font-semibold text-surface-700 transition-colors hover:bg-surface-100"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="flex h-10 items-center rounded-xl bg-primary-700 px-4 text-sm font-semibold text-white transition-all hover:bg-primary-800 active:scale-[0.98]"
              >
                Register
              </Link>
            </div>
          )}

          {/* Account icon — mobile */}
          <Link
            to={isAuthenticated ? '/account' : '/login'}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-surface-700 hover:bg-surface-100 lg:hidden"
            aria-label="Account"
          >
            <User size={22} />
          </Link>
        </div>
      </div>

      {/* Category nav — desktop */}
      <nav className="hidden border-t border-surface-100 lg:block">
        <div className="container-page flex items-center gap-1">
          <Link
            to="/products"
            className="flex h-11 items-center gap-1.5 px-3 text-sm font-semibold text-surface-700 transition-colors hover:text-primary-700"
          >
            All Products
          </Link>
          {categories.slice(0, 8).map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="flex h-11 items-center px-3 text-sm font-medium text-surface-600 transition-colors hover:text-primary-700"
            >
              {cat.name}
            </Link>
          ))}
          <Link
            to="/products"
            className="ml-auto flex h-11 items-center gap-1 px-3 text-sm font-semibold text-secondary-600 transition-colors hover:text-secondary-700"
          >
            Flash Sale <span className="rounded bg-secondary-500 px-1.5 py-0.5 text-[10px] text-white">HOT</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

function DropdownLink({ to, icon: Icon, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-surface-700 transition-colors hover:bg-surface-50"
    >
      <Icon size={16} className="text-surface-400" />
      {label}
    </Link>
  );
}
