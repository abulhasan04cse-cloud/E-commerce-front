import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileDrawer from '@/components/layout/MobileDrawer';

export default function MainLayout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <Header onMenuClick={() => setDrawerOpen(true)} />
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main key={pathname} className="flex-1 animate-fade-in">
        {children}
      </main>
      <Footer />
    </div>
  );
}
