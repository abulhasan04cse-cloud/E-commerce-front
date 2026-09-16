import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { cartService } from '@/services/cartService';
import { products as allProducts } from '@/data/products';
import { useToast } from '@/context/ToastContext';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const stored = await cartService.get();
        if (active) setItems(stored);
      } catch {
        /* ignore */
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  const productMap = new Map(allProducts.map((p) => [p.id, p]));

  const addToCart = useCallback(async (productId, quantity = 1) => {
    const updated = await cartService.add(productId, quantity);
    setItems(updated);
    const product = productMap.get(productId);
    toast(`${product?.name || 'Item'} added to cart`, {
      type: 'success',
      action: { label: 'View Cart', onClick: () => (window.location.href = '/cart') },
    });
  }, [productMap, toast]);

  const updateQuantity = useCallback(async (productId, quantity) => {
    const updated = await cartService.update(productId, quantity);
    setItems(updated);
  }, []);

  const removeFromCart = useCallback(async (productId) => {
    const updated = await cartService.remove(productId);
    setItems(updated);
    toast('Item removed from cart', { type: 'info' });
  }, [toast]);

  const clearCart = useCallback(async () => {
    const updated = await cartService.clear();
    setItems(updated);
  }, []);

  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  // Detailed items with product info joined
  const detailedItems = items
    .map((item) => {
      const product = productMap.get(item.productId);
      if (!product) return null;
      return { ...item, product };
    })
    .filter(Boolean);

  const subtotal = detailedItems.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  const value = {
    items,
    detailedItems,
    cartCount,
    subtotal,
    loading,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
