import axios from 'axios';

/**
 * Centralized Axios instance.
 *
 * When the Express backend is ready, set VITE_API_URL in your .env file.
 * Until then, services fall back to mock data so the UI is fully functional.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach auth token from localStorage if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('shopsphere_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Global response error normalizer
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const normalized = {
      message: error.response?.data?.message || error.message || 'Something went wrong',
      status: error.response?.status || 0,
      data: error.response?.data || null,
    };
    return Promise.reject(normalized);
  }
);

export default api;
