import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const promos = [
  {
    title: 'Electronics Deals',
    subtitle: 'Up to 40% off',
    description: 'Headphones, laptops, smartwatches & more',
    href: '/category/electronics',
    gradient: 'from-blue-600 to-cyan-500',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Fashion Sale',
    subtitle: 'Up to 60% off',
    description: 'Trending styles for every season',
    href: '/category/fashion',
    gradient: 'from-rose-600 to-pink-500',
    image: 'https://images.pexels.com/photos/8743972/pexels-photo-8743972.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Home Essentials',
    subtitle: 'Up to 35% off',
    description: 'Furniture, decor & kitchenware',
    href: '/category/home',
    gradient: 'from-teal-600 to-emerald-500',
    image: 'https://images.pexels.com/photos/17264275/pexels-photo-17264275.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function PromoBanners() {
  return (
    <section className="container-page py-12 lg:py-16">
      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        {promos.map((promo) => (
          <Link
            key={promo.title}
            to={promo.href}
            className="group relative flex h-56 flex-col justify-end overflow-hidden rounded-2xl p-6 shadow-card transition-all hover:shadow-card-hover active:scale-[0.98] sm:h-64"
          >
            {/* Background image */}
            <img
              src={promo.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${promo.gradient} opacity-85`} />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-900/70 to-transparent" />

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-wider text-white/90">
                {promo.subtitle}
              </p>
              <h3 className="mt-1 text-2xl font-extrabold text-white">{promo.title}</h3>
              <p className="mt-1 text-sm text-white/80">{promo.description}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                Shop Now
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
