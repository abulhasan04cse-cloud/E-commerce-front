import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Eye, Check } from 'lucide-react';
import Rating from '@/components/common/Rating';
import Badge from '@/components/common/Badge';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { getDiscountPercent, formatPrice } from '@/data/products';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [adding, setAdding] = useState(false);
  const [wishAnimating, setWishAnimating] = useState(false);

  const discount = getDiscountPercent(product);
  const wishlisted = isInWishlist(product.id);
  const outOfStock = product.stock === 0;
  const lowStock = product.stock > 0 && product.stock <= 10;

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAdding(true);
    try {
      await addToCart(product.id, 1);
    } finally {
      setAdding(false);
    }
  };

  const handleWishlist = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setWishAnimating(true);
    try {
      await toggleWishlist(product.id);
    } finally {
      setTimeout(() => setWishAnimating(false), 600);
    }
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-card transition-all duration-300 hover:shadow-card-hover hover:border-surface-300"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-surface-50">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            outOfStock ? 'opacity-60 grayscale' : ''
          }`}
        />

        {/* Discount badge */}
        {discount > 0 && (
          <div className="absolute left-3 top-3">
            <Badge variant="error" size="sm">-{discount}%</Badge>
          </div>
        )}

        {/* Out of stock overlay */}
        {outOfStock && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-lg bg-surface-900/70 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              Out of Stock
            </span>
          </div>
        )}

        {/* Quick view button — desktop hover */}
        <div className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:block">
          <span className="inline-flex h-9 items-center gap-1.5 rounded-xl bg-white/95 px-4 text-xs font-semibold text-surface-800 shadow-md backdrop-blur">
            <Eye size={14} /> Quick View
          </span>
        </div>

        {/* Wishlist button */}
        <button
          onClick={handleWishlist}
          className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 ${
            wishlisted
              ? 'bg-error-500 text-white'
              : 'bg-white/90 text-surface-600 hover:bg-white hover:text-error-500'
          } ${wishAnimating ? 'animate-bounce-subtle' : ''}`}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-pressed={wishlisted}
        >
          <Heart size={16} className={wishlisted ? 'fill-white' : ''} />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
          {product.brand}
        </p>
        <h3 className="mb-1.5 line-clamp-2 text-sm font-semibold leading-snug text-surface-800">
          {product.name}
        </h3>

        <Rating value={product.rating} count={product.reviewCount} size="xs" />

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold text-surface-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-surface-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {lowStock && (
          <p className="mt-1 text-xs font-medium text-warning-600">
            Only {product.stock} left
          </p>
        )}

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          disabled={adding || outOfStock}
          className="mt-3 inline-flex h-9 items-center justify-center gap-2 rounded-xl bg-primary-700 text-xs font-semibold text-white transition-all hover:bg-primary-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:mt-auto sm:h-10 sm:text-sm"
          aria-label={`Add ${product.name} to cart`}
        >
          {adding ? (
            <>
              <Check size={16} /> Added
            </>
          ) : (
            <>
              <ShoppingCart size={16} /> Add to Cart
            </>
          )}
        </button>
      </div>
    </Link>
  );
}
