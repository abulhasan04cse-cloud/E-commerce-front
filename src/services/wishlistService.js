/**
 * Wishlist service — mock implementation using localStorage.
 */

const WISH_KEY = 'shopsphere_wishlist';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const read = () => {
  try {
    return JSON.parse(localStorage.getItem(WISH_KEY)) || [];
  } catch {
    return [];
  }
};

const write = (ids) => localStorage.setItem(WISH_KEY, JSON.stringify(ids));

export const wishlistService = {
  async get() {
    await delay(100);
    return read();
  },

  async toggle(productId) {
    await delay(150);
    const ids = read();
    const idx = ids.indexOf(productId);
    if (idx >= 0) {
      ids.splice(idx, 1);
    } else {
      ids.push(productId);
    }
    write(ids);
    return ids;
  },

  async add(productId) {
    await delay(100);
    const ids = read();
    if (!ids.includes(productId)) ids.push(productId);
    write(ids);
    return ids;
  },

  async remove(productId) {
    await delay(100);
    const ids = read().filter((id) => id !== productId);
    write(ids);
    return ids;
  },
};
