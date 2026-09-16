import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { wishlistService } from '@/services/wishlistService';
import { useToast } from '@/context/ToastContext';

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [ids, setIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const stored = await wishlistService.get();
        if (active) setIds(stored);
      } catch {
        /* ignore */
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  const toggleWishlist = useCallback(async (productId) => {
    const updated = await wishlistService.toggle(productId);
    setIds(updated);
    const isWishlisted = updated.includes(productId);
    toast(
      isWishlisted ? 'Added to wishlist' : 'Removed from wishlist',
      { type: isWishlisted ? 'success' : 'info' }
    );
    return isWishlisted;
  }, [toast]);

  const removeFromWishlist = useCallback(async (productId) => {
    const updated = await wishlistService.remove(productId);
    setIds(updated);
    toast('Removed from wishlist', { type: 'info' });
  }, [toast]);

  const isInWishlist = useCallback((productId) => ids.includes(productId), [ids]);

  const value = {
    ids,
    count: ids.length,
    loading,
    toggleWishlist,
    removeFromWishlist,
    isInWishlist,
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider');
  return ctx;
}
