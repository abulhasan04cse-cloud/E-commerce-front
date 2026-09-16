/**
 * Order service — mock implementation using localStorage.
 */

const ORDERS_KEY = 'shopsphere_orders';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const read = () => {
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
  } catch {
    return [];
  }
};

const write = (orders) => localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));

const generateOrderId = () =>
  'OD' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).slice(2, 5).toUpperCase();

export const orderService = {
  async create(orderData) {
    await delay(800);
    const orders = read();
    const order = {
      id: generateOrderId(),
      ...orderData,
      status: 'confirmed',
      statusHistory: [
        { status: 'ordered', date: new Date().toISOString() },
        { status: 'confirmed', date: new Date().toISOString() },
      ],
      createdAt: new Date().toISOString(),
    };
    orders.unshift(order);
    write(orders);
    return order;
  },

  async getAll() {
    await delay(400);
    return read();
  },

  async getById(id) {
    await delay(400);
    const order = read().find((o) => o.id === id);
    if (!order) throw { message: 'Order not found', status: 404 };
    return order;
  },
};
