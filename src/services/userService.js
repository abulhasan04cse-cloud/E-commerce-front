/**
 * User service — mock implementation.
 * Manages profile and addresses in localStorage.
 */

const PROFILE_KEY = 'shopsphere_profile';
const ADDRESSES_KEY = 'shopsphere_addresses';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const userService = {
  async getProfile() {
    await delay(200);
    try {
      return JSON.parse(localStorage.getItem(PROFILE_KEY)) || null;
    } catch {
      return null;
    }
  },

  async updateProfile(data) {
    await delay(400);
    const current = JSON.parse(localStorage.getItem(PROFILE_KEY) || '{}');
    const updated = { ...current, ...data };
    localStorage.setItem(PROFILE_KEY, JSON.stringify(updated));
    return updated;
  },

  async getAddresses() {
    await delay(200);
    try {
      return JSON.parse(localStorage.getItem(ADDRESSES_KEY)) || [];
    } catch {
      return [];
    }
  },

  async addAddress(address) {
    await delay(300);
    const addresses = JSON.parse(localStorage.getItem(ADDRESSES_KEY) || '[]');
    const newAddr = { id: 'addr_' + Date.now(), ...address };
    addresses.push(newAddr);
    localStorage.setItem(ADDRESSES_KEY, JSON.stringify(addresses));
    return addresses;
  },

  async updateAddress(id, data) {
    await delay(300);
    const addresses = JSON.parse(localStorage.getItem(ADDRESSES_KEY) || '[]');
    const idx = addresses.findIndex((a) => a.id === id);
    if (idx >= 0) addresses[idx] = { ...addresses[idx], ...data, id };
    localStorage.setItem(ADDRESSES_KEY, JSON.stringify(addresses));
    return addresses;
  },

  async deleteAddress(id) {
    await delay(200);
    const addresses = JSON.parse(localStorage.getItem(ADDRESSES_KEY) || '[]').filter(
      (a) => a.id !== id
    );
    localStorage.setItem(ADDRESSES_KEY, JSON.stringify(addresses));
    return addresses;
  },
};
