import { Link } from 'react-router-dom';
import { ShoppingCart, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { categories } from '@/data/categories';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-surface-200 bg-white">
      {/* Top CTA strip */}
      <div className="border-b border-surface-100 bg-surface-50">
        <div className="container-page grid grid-cols-2 gap-4 py-8 md:grid-cols-4">
          <Feature icon={ShoppingCart} title="Secure Payment" desc="Encrypted checkout" />
          <Feature icon={MapPin} title="Free Shipping" desc="On orders over $50" />
          <Feature icon={Mail} title="24/7 Support" desc="Always here to help" />
          <Feature icon={Phone} title="Easy Returns" desc="30-day return policy" />
        </div>
      </div>

      {/* Main footer */}
      <div className="container-page grid grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-6">
        {/* Brand */}
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-700 text-white">
              <ShoppingCart size={18} />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-surface-900">
              Shop<span className="text-primary-700">Sphere</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-surface-500">
            Your one-stop online shopping destination for electronics, fashion, home essentials, and more. Quality products, delivered fast.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <SocialLink icon={Facebook} label="Facebook" />
            <SocialLink icon={Twitter} label="Twitter" />
            <SocialLink icon={Instagram} label="Instagram" />
            <SocialLink icon={Youtube} label="YouTube" />
          </div>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-surface-800">Customer Service</h4>
          <ul className="space-y-2.5">
            <FooterLink to="/products">Help Center</FooterLink>
            <FooterLink to="/products">Track Order</FooterLink>
            <FooterLink to="/products">Returns & Refunds</FooterLink>
            <FooterLink to="/products">Shipping Info</FooterLink>
            <FooterLink to="/products">Contact Us</FooterLink>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-surface-800">Account</h4>
          <ul className="space-y-2.5">
            <FooterLink to="/login">Sign In</FooterLink>
            <FooterLink to="/register">Create Account</FooterLink>
            <FooterLink to="/account">My Profile</FooterLink>
            <FooterLink to="/account/orders">My Orders</FooterLink>
            <FooterLink to="/wishlist">Wishlist</FooterLink>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-surface-800">Categories</h4>
          <ul className="space-y-2.5">
            {categories.slice(0, 5).map((cat) => (
              <FooterLink key={cat.id} to={cat.href}>{cat.name}</FooterLink>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-surface-800">Company</h4>
          <ul className="space-y-2.5">
            <FooterLink to="/products">About ShopSphere</FooterLink>
            <FooterLink to="/products">Careers</FooterLink>
            <FooterLink to="/products">Privacy Policy</FooterLink>
            <FooterLink to="/products">Terms of Service</FooterLink>
            <FooterLink to="/products">Sell on ShopSphere</FooterLink>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-surface-100">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-xs text-surface-400">
            &copy; {new Date().getFullYear()} ShopSphere. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-surface-400">
            <span>We accept:</span>
            <div className="flex items-center gap-2">
              {['VISA', 'MC', 'AMEX', 'UPI', 'COD'].map((p) => (
                <span key={p} className="rounded border border-surface-200 bg-surface-50 px-2 py-1 text-[10px] font-bold text-surface-500">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-sm font-bold text-surface-800">{title}</p>
        <p className="text-xs text-surface-400">{desc}</p>
      </div>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="text-sm text-surface-500 transition-colors hover:text-primary-700">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ icon: Icon, label }) {
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-100 text-surface-500 transition-all hover:bg-primary-700 hover:text-white"
      aria-label={label}
    >
      <Icon size={18} />
    </a>
  );
}
