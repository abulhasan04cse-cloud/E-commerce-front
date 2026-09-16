import { products as mockProducts } from '@/data/products';

const MOCK_DELAY = 400;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Returns a shuffled copy for "recommended" feel.
 */
const shuffle = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export const productService = {
  async getAll(params = {}) {
    await delay(MOCK_DELAY);
    let result = [...mockProducts];

    if (params.category) {
      result = result.filter((p) => p.category === params.category);
    }
    if (params.search) {
      const q = params.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    if (params.brand) {
      const brands = Array.isArray(params.brand) ? params.brand : [params.brand];
      result = result.filter((p) => brands.includes(p.brand));
    }
    if (params.minPrice != null) {
      result = result.filter((p) => p.price >= params.minPrice);
    }
    if (params.maxPrice != null) {
      result = result.filter((p) => p.price <= params.maxPrice);
    }
    if (params.minRating != null) {
      result = result.filter((p) => p.rating >= params.minRating);
    }

    // Sort
    switch (params.sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.reverse();
        break;
      case 'popularity':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        break;
    }

    // Pagination
    const page = params.page || 1;
    const limit = params.limit || 12;
    const total = result.length;
    const start = (page - 1) * limit;
    const items = result.slice(start, start + limit);

    return { items, total, page, totalPages: Math.ceil(total / limit) };
  },

  async getById(id) {
    await delay(MOCK_DELAY);
    const product = mockProducts.find((p) => p.id === id);
    if (!product) throw { message: 'Product not found', status: 404 };
    return product;
  },

  async getByCategory(category, limit) {
    await delay(MOCK_DELAY);
    let result = mockProducts.filter((p) => p.category === category);
    if (limit) result = result.slice(0, limit);
    return result;
  },

  async getFlashSale() {
    await delay(MOCK_DELAY);
    return mockProducts.filter((p) => p.tags?.includes('flash-sale'));
  },

  async getTrending(limit = 8) {
    await delay(MOCK_DELAY);
    return mockProducts.filter((p) => p.tags?.includes('trending')).slice(0, limit);
  },

  async getBestSellers(limit = 10) {
    await delay(MOCK_DELAY);
    return mockProducts.filter((p) => p.tags?.includes('bestseller')).slice(0, limit);
  },

  async getRecommended(limit = 8) {
    await delay(MOCK_DELAY);
    return shuffle(mockProducts).slice(0, limit);
  },

  async getRelated(id, limit = 4) {
    await delay(MOCK_DELAY);
    const product = mockProducts.find((p) => p.id === id);
    if (!product) return [];
    return mockProducts
      .filter((p) => p.category === product.category && p.id !== id)
      .slice(0, limit);
  },

  async getCategories() {
    await delay(200);
    // Re-use static import to avoid circular dependency with icons
    const { categories } = await import('@/data/categories');
    return categories;
  },

  async searchSuggestions(query) {
    await delay(150);
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    return mockProducts
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q)
      )
      .slice(0, 6);
  },
};
