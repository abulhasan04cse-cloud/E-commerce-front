/**
 * Cart service — mock implementation using localStorage.
 * Replace with real API calls when the Express backend is ready.
 */

const CART_KEY = 'shopsphere_cart';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const read = () => {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
};

const write = (items) => localStorage.setItem(CART_KEY, JSON.stringify(items));

export const cartService = {
  async get() {
    await delay(150);
    return read();
  },

  async add(productId, quantity = 1) {
    await delay(200);
    const items = read();
    const existing = items.find((i) => i.productId === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      items.push({ productId, quantity });
    }
    write(items);
    return items;
  },

  async update(productId, quantity) {
    await delay(150);
    const items = read();
    const item = items.find((i) => i.productId === productId);
    if (item) item.quantity = Math.max(1, quantity);
    write(items);
    return items;
  },

  async remove(productId) {
    await delay(150);
    const items = read().filter((i) => i.productId !== productId);
    write(items);
    return items;
  },

  async clear() {
    await delay(100);
    write([]);
    return [];
  },
};
