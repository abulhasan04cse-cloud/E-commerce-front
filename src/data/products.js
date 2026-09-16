// 36 mock products across multiple categories.
// Images are real, stable Pexels URLs that are guaranteed to load.

export const products = [
  // ── Electronics ──────────────────────────────────────────────
  {
    id: 'p001', name: 'AuraSound Pro Wireless Headphones', brand: 'AuraSound', category: 'electronics',
    price: 199.99, originalPrice: 299.99, rating: 4.8, reviewCount: 2453, stock: 32,
    images: ['https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Studio-grade wireless headphones with active noise cancellation, 40-hour battery life, and plush memory-foam ear cushions for all-day comfort.',
    specifications: { 'Driver': '40mm', 'Battery': '40 hours', 'Connectivity': 'Bluetooth 5.3', 'Weight': '250g', 'Charging': 'USB-C' },
    tags: ['bestseller', 'flash-sale'],
  },
  {
    id: 'p002', name: 'Nimbus 5G Smartphone (256GB)', brand: 'Nimbus', category: 'electronics',
    price: 699.00, originalPrice: 899.00, rating: 4.6, reviewCount: 1820, stock: 18,
    images: ['https://images.pexels.com/photos/14979013/pexels-photo-14979013.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: '6.7" AMOLED display, triple 50MP camera system, 5G connectivity, and all-day battery with 65W fast charging.',
    specifications: { 'Display': '6.7" AMOLED', 'Storage': '256GB', 'RAM': '12GB', 'Camera': '50MP Triple', 'Battery': '5000mAh' },
    tags: ['trending', 'flash-sale'],
  },
  {
    id: 'p003', name: 'StratusBook Air 14 Laptop', brand: 'Stratus', category: 'electronics',
    price: 1099.00, originalPrice: 1349.00, rating: 4.7, reviewCount: 980, stock: 12,
    images: ['https://images.pexels.com/photos/18311089/pexels-photo-18311089.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Ultra-thin 14" laptop with 16GB RAM, 512GB SSD, and a 14-hour battery. Perfect for work and play.',
    specifications: { 'CPU': 'Octa-core 2.4GHz', 'RAM': '16GB', 'Storage': '512GB SSD', 'Display': '14" Retina', 'Weight': '1.2kg' },
    tags: ['bestseller'],
  },
  {
    id: 'p004', name: 'PulseFit Smartwatch Series 6', brand: 'PulseFit', category: 'electronics',
    price: 149.99, originalPrice: 229.99, rating: 4.5, reviewCount: 3104, stock: 45,
    images: ['https://images.pexels.com/photos/31541678/pexels-photo-31541678.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Health-tracking smartwatch with heart-rate monitor, SpO2 sensor, GPS, and 7-day battery life.',
    specifications: { 'Display': '1.9" AMOLED', 'Battery': '7 days', 'Water Resistance': '5ATM', 'Sensors': 'HR, SpO2, GPS', 'Connectivity': 'Bluetooth 5.2' },
    tags: ['trending', 'flash-sale'],
  },
  {
    id: 'p005', name: 'BoomBox Mini Bluetooth Speaker', brand: 'BoomBox', category: 'electronics',
    price: 59.99, originalPrice: 89.99, rating: 4.4, reviewCount: 1567, stock: 60,
    images: ['https://images.pexels.com/photos/29581125/pexels-photo-29581125.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Portable Bluetooth speaker with 360° sound, IPX7 waterproofing, and 20-hour playtime.',
    specifications: { 'Output': '20W', 'Battery': '20 hours', 'Waterproof': 'IPX7', 'Weight': '450g', 'Connectivity': 'Bluetooth 5.1' },
    tags: ['trending'],
  },
  {
    id: 'p006', name: 'OptiZoom 4K Camera', brand: 'OptiZoom', category: 'electronics',
    price: 549.00, originalPrice: 799.00, rating: 4.7, reviewCount: 742, stock: 9,
    images: ['https://images.pexels.com/photos/26292003/pexels-photo-26292003.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Mirrorless 4K camera with 24-105mm lens, 5-axis stabilization, and weather-sealed body.',
    specifications: { 'Sensor': '24MP APS-C', 'Video': '4K 60fps', 'Stabilization': '5-axis IBIS', 'Lens': '24-105mm', 'Weight': '610g' },
    tags: ['bestseller'],
  },

  // ── Fashion ──────────────────────────────────────────────────
  {
    id: 'p007', name: 'Heritage Cotton T-Shirt', brand: 'Heritage', category: 'fashion',
    price: 24.99, originalPrice: 39.99, rating: 4.3, reviewCount: 2104, stock: 120,
    images: ['https://images.pexels.com/photos/966067/pexels-photo-966067.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: '100% organic cotton t-shirt with a relaxed fit. Pre-shrunk and garment-dyed for lasting color.',
    specifications: { 'Material': '100% Organic Cotton', 'Fit': 'Relaxed', 'Care': 'Machine Wash Cold', 'Sizes': 'S–XXL', 'Weight': '180gsm' },
    tags: ['trending'],
  },
  {
    id: 'p008', name: 'Classic Selvedge Denim Jeans', brand: 'Indigo Co.', category: 'fashion',
    price: 79.99, originalPrice: 119.99, rating: 4.6, reviewCount: 892, stock: 55,
    images: ['https://images.pexels.com/photos/18533668/pexels-photo-18533668.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Premium 14oz selvedge denim with a slim straight fit. Built to age beautifully.',
    specifications: { 'Material': '100% Cotton Selvedge', 'Weight': '14oz', 'Fit': 'Slim Straight', 'Rise': 'Mid', 'Sizes': '28–38' },
    tags: ['bestseller'],
  },
  {
    id: 'p009', name: 'Casual Linen Shirt', brand: 'Mariner', category: 'fashion',
    price: 39.99, originalPrice: 59.99, rating: 4.4, reviewCount: 678, stock: 80,
    images: ['https://images.pexels.com/photos/13632832/pexels-photo-13632832.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Breathable linen-blend shirt with a button-down collar. Ideal for warm-weather dressing.',
    specifications: { 'Material': '55% Linen 45% Cotton', 'Fit': 'Regular', 'Care': 'Machine Wash', 'Sizes': 'S–XL', 'Pattern': 'Solid' },
    tags: [],
  },

  // ── Men's Fashion ────────────────────────────────────────────
  {
    id: 'p010', name: 'Urban Runner Sneakers', brand: 'Stride', category: 'mens-fashion',
    price: 89.99, originalPrice: 129.99, rating: 4.5, reviewCount: 1456, stock: 35,
    images: ['https://images.pexels.com/photos/19845610/pexels-photo-19845610.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Lightweight knit sneakers with responsive cushioning and a breathable mesh upper.',
    specifications: { 'Upper': 'Knit Mesh', 'Sole': 'EVA Foam', 'Weight': '280g', 'Sizes': '7–12', 'Color': 'Black' },
    tags: ['trending', 'flash-sale'],
  },
  {
    id: 'p011', name: 'Leather Derby Shoes', brand: 'Cobblestone', category: 'mens-fashion',
    price: 119.00, originalPrice: 179.00, rating: 4.7, reviewCount: 534, stock: 22,
    images: ['https://images.pexels.com/photos/10259873/pexels-photo-10259873.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Handcrafted full-grain leather derby shoes with Goodyear-welted construction.',
    specifications: { 'Material': 'Full-grain Leather', 'Construction': 'Goodyear Welt', 'Sole': 'Leather', 'Sizes': '7–12', 'Origin': 'Portugal' },
    tags: ['bestseller'],
  },
  {
    id: 'p012', name: 'Canvas Backpack', brand: 'Rover', category: 'mens-fashion',
    price: 49.99, originalPrice: 79.99, rating: 4.2, reviewCount: 876, stock: 70,
    images: ['https://images.pexels.com/photos/31453948/pexels-photo-31453948.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Waxed canvas backpack with leather trim, padded laptop sleeve, and water-resistant lining.',
    specifications: { 'Material': 'Waxed Canvas', 'Capacity': '24L', 'Laptop Sleeve': '15"', 'Weight': '900g', 'Compartments': '4' },
    tags: [],
  },

  // ── Women's Fashion ──────────────────────────────────────────
  {
    id: 'p013', name: 'Suede Heeled Sandals', brand: 'Maison Lux', category: 'womens-fashion',
    price: 99.99, originalPrice: 149.99, rating: 4.6, reviewCount: 412, stock: 28,
    images: ['https://images.pexels.com/photos/27174551/pexels-photo-27174551.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Elegant suede heeled sandals with an ankle strap and cushioned insole.',
    specifications: { 'Heel': '3.5"', 'Material': 'Suede', 'Sole': 'Leather', 'Sizes': '5–10', 'Closure': 'Buckle' },
    tags: ['trending'],
  },
  {
    id: 'p014', name: 'Premium Leather Handbag', brand: 'Maison Lux', category: 'womens-fashion',
    price: 159.00, originalPrice: 240.00, rating: 4.8, reviewCount: 1023, stock: 15,
    images: ['https://images.pexels.com/photos/27046143/pexels-photo-27046143.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Structured leather handbag with gold-tone hardware and detachable shoulder strap.',
    specifications: { 'Material': 'Full-grain Leather', 'Dimensions': '30×22×12cm', 'Strap': 'Detachable', 'Compartments': '3', 'Hardware': 'Gold-tone' },
    tags: ['bestseller', 'flash-sale'],
  },
  {
    id: 'p015', name: 'White Sneakers', brand: 'Stride', category: 'womens-fashion',
    price: 69.99, originalPrice: 99.99, rating: 4.4, reviewCount: 678, stock: 40,
    images: ['https://images.pexels.com/photos/27204251/pexels-photo-27204251.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Minimalist white leather sneakers with a clean silhouette and cushioned footbed.',
    specifications: { 'Upper': 'Genuine Leather', 'Sole': 'Rubber', 'Sizes': '5–10', 'Weight': '260g', 'Color': 'White' },
    tags: [],
  },
  {
    id: 'p016', name: 'Leather Shoulder Bag', brand: 'Gino Bigioni', category: 'womens-fashion',
    price: 129.00, originalPrice: 189.00, rating: 4.5, reviewCount: 334, stock: 20,
    images: ['https://images.pexels.com/photos/26965828/pexels-photo-26965828.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Italian-crafted leather shoulder bag with a timeless silhouette.',
    specifications: { 'Material': 'Italian Leather', 'Dimensions': '28×20×8cm', 'Strap': 'Adjustable', 'Weight': '600g', 'Origin': 'Italy' },
    tags: ['trending'],
  },

  // ── Shoes ────────────────────────────────────────────────────
  {
    id: 'p017', name: 'High-Top Canvas Sneakers', brand: 'Stride', category: 'shoes',
    price: 54.99, originalPrice: 84.99, rating: 4.3, reviewCount: 1122, stock: 50,
    images: ['https://images.pexels.com/photos/28488349/pexels-photo-28488349.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Classic high-top canvas sneakers with a rubber toe cap and padded collar.',
    specifications: { 'Upper': 'Canvas', 'Sole': 'Rubber', 'Sizes': '6–13', 'Weight': '320g', 'Pattern': 'Solid' },
    tags: ['flash-sale'],
  },
  {
    id: 'p018', name: 'Leather Lace-Up Boots', brand: 'Cobblestone', category: 'shoes',
    price: 139.00, originalPrice: 199.00, rating: 4.7, reviewCount: 456, stock: 18,
    images: ['https://images.pexels.com/photos/27381290/pexels-photo-27381290.png?auto=compress&cs=tinysrgb&w=800'],
    description: 'Full-grain leather lace-up boots with a cushioned ortholite insole.',
    specifications: { 'Material': 'Full-grain Leather', 'Sole': 'Rubber', 'Sizes': '7–12', 'Weight': '550g', 'Waterproof': 'Yes' },
    tags: ['bestseller'],
  },
  {
    id: 'p019', name: 'Rainbow Stripe Sneakers', brand: 'Stride', category: 'shoes',
    price: 74.99, originalPrice: 109.99, rating: 4.2, reviewCount: 289, stock: 33,
    images: ['https://images.pexels.com/photos/26775749/pexels-photo-26775749.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Statement sneakers with colorful stripe accents and a reflective surface.',
    specifications: { 'Upper': 'Synthetic', 'Sole': 'EVA', 'Sizes': '6–12', 'Weight': '300g', 'Pattern': 'Striped' },
    tags: ['trending'],
  },

  // ── Beauty ───────────────────────────────────────────────────
  {
    id: 'p020', name: 'HydraGlow Face Cream', brand: 'HydraGlow', category: 'beauty',
    price: 29.99, originalPrice: 44.99, rating: 4.5, reviewCount: 2340, stock: 100,
    images: ['https://images.pexels.com/photos/36339062/pexels-photo-36339062.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Daily moisturizer with hyaluronic acid and niacinamide for a radiant complexion.',
    specifications: { 'Volume': '50ml', 'Skin Type': 'All', 'Key Ingredients': 'Hyaluronic Acid, Niacinamide', 'Vegan': 'Yes', 'SPF': 'None' },
    tags: ['bestseller', 'flash-sale'],
  },
  {
    id: 'p021', name: 'Velvet Matte Lipstick Set', brand: 'Velvet', category: 'beauty',
    price: 34.99, originalPrice: 55.00, rating: 4.4, reviewCount: 1567, stock: 65,
    images: ['https://images.pexels.com/photos/7810600/pexels-photo-7810600.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Set of 5 long-wearing matte lipsticks in nude and bold shades.',
    specifications: { 'Count': '5 shades', 'Finish': 'Matte', 'Cruelty-Free': 'Yes', 'Weight': '3.5g each', 'Duration': '12 hours' },
    tags: ['trending'],
  },
  {
    id: 'p022', name: 'Pro Makeup Brush Kit', brand: 'Velvet', category: 'beauty',
    price: 39.99, originalPrice: 69.99, rating: 4.6, reviewCount: 890, stock: 42,
    images: ['https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: '12-piece professional makeup brush set with a vegan leather travel case.',
    specifications: { 'Count': '12 brushes', 'Bristles': 'Synthetic Vegan', 'Case': 'Vegan Leather', 'Handles': 'Bamboo', 'Use': 'Face & Eyes' },
    tags: [],
  },
  {
    id: 'p023', name: 'Foundation Stick Trio', brand: 'Velvet', category: 'beauty',
    price: 27.99, originalPrice: 42.00, rating: 4.3, reviewCount: 545, stock: 55,
    images: ['https://images.pexels.com/photos/1776331/pexels-photo-1776331.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Blendable foundation sticks for contouring, highlighting, and concealing.',
    specifications: { 'Count': '3 sticks', 'Coverage': 'Medium–Full', 'Finish': 'Matte', 'Shades': 'Light, Medium, Deep', 'Weight': '8g each' },
    tags: ['flash-sale'],
  },

  // ── Home ─────────────────────────────────────────────────────
  {
    id: 'p024', name: 'Minimalist Wooden Bookshelf', brand: 'NordHaus', category: 'home',
    price: 249.00, originalPrice: 349.00, rating: 4.6, reviewCount: 312, stock: 8,
    images: ['https://images.pexels.com/photos/31338030/pexels-photo-31338030.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: '5-tier solid oak bookshelf with a slim profile and integrated LED lighting.',
    specifications: { 'Material': 'Solid Oak', 'Shelves': '5', 'Dimensions': '80×30×180cm', 'Weight': '22kg', 'Assembly': 'Required' },
    tags: ['trending'],
  },
  {
    id: 'p025', name: 'Leather Living Room Sofa', brand: 'NordHaus', category: 'home',
    price: 899.00, originalPrice: 1299.00, rating: 4.8, reviewCount: 198, stock: 5,
    images: ['https://images.pexels.com/photos/17264275/pexels-photo-17264275.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Top-grain leather 3-seater sofa with high-resilience foam and solid wood frame.',
    specifications: { 'Material': 'Top-grain Leather', 'Seating': '3', 'Dimensions': '210×90×85cm', 'Frame': 'Solid Wood', 'Warranty': '5 years' },
    tags: ['bestseller'],
  },
  {
    id: 'p026', name: 'Credenza Sideboard', brand: 'NordHaus', category: 'home',
    price: 449.00, originalPrice: 629.00, rating: 4.5, reviewCount: 134, stock: 7,
    images: ['https://images.pexels.com/photos/20557088/pexels-photo-20557088.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Modern sideboard with soft-close doors and a matte lacquer finish.',
    specifications: { 'Material': 'MDF + Lacquer', 'Doors': '3', 'Dimensions': '160×45×75cm', 'Color': 'White', 'Assembly': 'Required' },
    tags: [],
  },
  {
    id: 'p027', name: 'Ceramic Coffee Mug Set', brand: 'Morning Co.', category: 'home',
    price: 22.99, originalPrice: 34.99, rating: 4.4, reviewCount: 760, stock: 90,
    images: ['https://images.pexels.com/photos/16033792/pexels-photo-16033792.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Set of 4 hand-glazed ceramic mugs, dishwasher and microwave safe.',
    specifications: { 'Count': '4', 'Material': 'Stoneware Ceramic', 'Capacity': '350ml', 'Microwave Safe': 'Yes', 'Dishwasher Safe': 'Yes' },
    tags: ['flash-sale'],
  },

  // ── Grocery ──────────────────────────────────────────────────
  {
    id: 'p028', name: 'Organic Fresh Produce Basket', brand: 'GreenMarket', category: 'grocery',
    price: 39.99, originalPrice: 54.99, rating: 4.5, reviewCount: 430, stock: 30,
    images: ['https://images.pexels.com/photos/9070116/pexels-photo-9070116.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Farm-fresh seasonal fruit and vegetable basket, sourced from local organic farms.',
    specifications: { 'Items': '10–12 varieties', 'Weight': '~5kg', 'Organic': 'Yes', 'Sourcing': 'Local Farms', 'Shelf Life': '5–7 days' },
    tags: ['trending'],
  },
  {
    id: 'p029', name: 'Artisan Coffee Beans 1kg', brand: 'Morning Co.', category: 'grocery',
    price: 19.99, originalPrice: 29.99, rating: 4.7, reviewCount: 1120, stock: 80,
    images: ['https://images.pexels.com/photos/34153652/pexels-photo-34153652.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Single-origin medium-roast Arabica beans with notes of chocolate and citrus.',
    specifications: { 'Weight': '1kg', 'Roast': 'Medium', 'Origin': 'Ethiopia', 'Grind': 'Whole Bean', 'Notes': 'Chocolate, Citrus' },
    tags: ['bestseller'],
  },

  // ── Accessories ──────────────────────────────────────────────
  {
    id: 'p030', name: 'Polarized Aviator Sunglasses', brand: 'SunGuard', category: 'accessories',
    price: 44.99, originalPrice: 69.99, rating: 4.4, reviewCount: 654, stock: 48,
    images: ['https://images.pexels.com/photos/32677219/pexels-photo-32677219.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'UV400 polarized aviator sunglasses with a lightweight titanium frame.',
    specifications: { 'Lens': 'Polarized UV400', 'Frame': 'Titanium', 'Weight': '25g', 'Case': 'Included', 'Warranty': '1 year' },
    tags: ['trending', 'flash-sale'],
  },
  {
    id: 'p031', name: 'Classic Leather Watch', brand: 'Meridian', category: 'accessories',
    price: 179.00, originalPrice: 259.00, rating: 4.7, reviewCount: 540, stock: 25,
    images: ['https://images.pexels.com/photos/6157408/pexels-photo-6157408.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Timeless analog watch with a genuine leather strap and sapphire crystal.',
    specifications: { 'Movement': 'Quartz', 'Case': '42mm Stainless Steel', 'Strap': 'Genuine Leather', 'Water Resistance': '3ATM', 'Warranty': '2 years' },
    tags: ['bestseller'],
  },
  {
    id: 'p032', name: 'Luxury Automatic Wristwatch', brand: 'Meridian', category: 'accessories',
    price: 399.00, originalPrice: 599.00, rating: 4.9, reviewCount: 287, stock: 10,
    images: ['https://images.pexels.com/photos/14312717/pexels-photo-14312717.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Self-winding automatic watch with an exhibition caseback and 50-hour power reserve.',
    specifications: { 'Movement': 'Automatic', 'Case': '40mm Steel', 'Crystal': 'Sapphire', 'Power Reserve': '50 hours', 'Water Resistance': '10ATM' },
    tags: ['flash-sale'],
  },
  {
    id: 'p033', name: 'Designer Sunglasses', brand: 'SunGuard', category: 'accessories',
    price: 89.99, originalPrice: 139.99, rating: 4.5, reviewCount: 320, stock: 30,
    images: ['https://images.pexels.com/photos/32677205/pexels-photo-32677205.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Oversized designer sunglasses with gradient brown lenses and metal temples.',
    specifications: { 'Lens': 'Gradient UV400', 'Frame': 'Metal', 'Weight': '28g', 'Case': 'Included', 'Style': 'Oversized' },
    tags: [],
  },

  // ── Sports ───────────────────────────────────────────────────
  {
    id: 'p034', name: 'Pro Yoga Mat (6mm)', brand: 'FlexFit', category: 'sports',
    price: 34.99, originalPrice: 54.99, rating: 4.6, reviewCount: 1890, stock: 75,
    images: ['https://images.pexels.com/photos/8436449/pexels-photo-8436449.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Eco-friendly TPE yoga mat with extra cushioning and non-slip texture.',
    specifications: { 'Thickness': '6mm', 'Material': 'TPE', 'Dimensions': '183×61cm', 'Weight': '950g', 'Carry Strap': 'Included' },
    tags: ['bestseller', 'flash-sale'],
  },
  {
    id: 'p035', name: 'Adjustable Dumbbell Set (24kg)', brand: 'FlexFit', category: 'sports',
    price: 199.00, originalPrice: 299.00, rating: 4.7, reviewCount: 430, stock: 14,
    images: ['https://images.pexels.com/photos/16148425/pexels-photo-16148425.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Space-saving adjustable dumbbells, 2.5–24kg per hand with a quick-select dial.',
    specifications: { 'Weight Range': '2.5–24kg', 'Increments': '2.5kg', 'Material': 'Steel', 'Set': '2 dumbbells', 'Stand': 'Included' },
    tags: ['trending'],
  },
  {
    id: 'p036', name: 'Resistance Band Kit', brand: 'FlexFit', category: 'sports',
    price: 19.99, originalPrice: 34.99, rating: 4.3, reviewCount: 980, stock: 110,
    images: ['https://images.pexels.com/photos/28970123/pexels-photo-28970123.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: '5-level resistance band set with door anchor, handles, and carry bag.',
    specifications: { 'Levels': '5 (10–50lbs)', 'Material': 'Natural Latex', 'Accessories': 'Handles, Door Anchor', 'Bag': 'Included', 'Guide': 'Printed' },
    tags: [],
  },
];

export const getDiscountPercent = (product) =>
  Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

export const formatPrice = (value) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
