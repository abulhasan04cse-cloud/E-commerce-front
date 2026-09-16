/**
 * Auth service — mock implementation.
 * Replace mock logic with real API calls when the Express backend is ready.
 *
 * Example real implementation:
 *   return api.post('/auth/login', credentials);
 */

const MOCK_USERS_KEY = 'shopsphere_users';
const MOCK_TOKEN_KEY = 'shopsphere_token';
const MOCK_CURRENT_KEY = 'shopsphere_current_user';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getStoredUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(MOCK_USERS_KEY)) || [];
  } catch {
    return [];
  }
};

const saveUsers = (users) =>
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users));

const generateToken = () =>
  'mock_' + Math.random().toString(36).slice(2) + Date.now().toString(36);

export const authService = {
  async register({ name, email, phone, password }) {
    await delay(600);
    const users = getStoredUsers();
    if (users.some((u) => u.email === email)) {
      throw { message: 'An account with this email already exists', status: 409 };
    }
    const user = { id: 'u_' + Date.now(), name, email, phone };
    users.push({ ...user, password });
    saveUsers(users);
    const token = generateToken();
    localStorage.setItem(MOCK_TOKEN_KEY, token);
    localStorage.setItem(MOCK_CURRENT_KEY, JSON.stringify(user));
    return { user, token };
  },

  async login({ email, password }) {
    await delay(600);
    const users = getStoredUsers();
    const match = users.find((u) => u.email === email && u.password === password);
    if (!match) {
      // Demo fallback so the UI is testable without registering first
      if (email === 'demo@shopsphere.com' && password === 'demo1234') {
        const demoUser = {
          id: 'u_demo',
          name: 'Demo User',
          email: 'demo@shopsphere.com',
          phone: '+1 555 010 0000',
        };
        const token = generateToken();
        localStorage.setItem(MOCK_TOKEN_KEY, token);
        localStorage.setItem(MOCK_CURRENT_KEY, JSON.stringify(demoUser));
        return { user: demoUser, token };
      }
      throw { message: 'Invalid email or password', status: 401 };
    }
    const { password: _pw, ...user } = match;
    const token = generateToken();
    localStorage.setItem(MOCK_TOKEN_KEY, token);
    localStorage.setItem(MOCK_CURRENT_KEY, JSON.stringify(user));
    return { user, token };
  },

  async logout() {
    await delay(200);
    localStorage.removeItem(MOCK_TOKEN_KEY);
    localStorage.removeItem(MOCK_CURRENT_KEY);
    return true;
  },

  async getCurrentUser() {
    await delay(200);
    try {
      const raw = localStorage.getItem(MOCK_CURRENT_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  async forgotPassword(email) {
    await delay(600);
    // Mock — always succeeds
    return { message: `If an account exists for ${email}, a reset link has been sent.` };
  },
};
