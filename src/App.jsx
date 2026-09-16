import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import HomePage from '@/pages/Home/HomePage';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';
import ComingSoon, { CategoryPage } from '@/pages/ComingSoon';

export default function App() {
  return (
    <MainLayout>
      <Routes>
        {/* Phase 1 — fully implemented */}
        <Route path="/" element={<HomePage />} />

        {/* Phase 2+ — placeholder routes so navigation works */}
        <Route path="/products" element={
          <ComingSoon phase="Phase 2" title="Product Listing"
            description="Full product listing with filters, sorting, and pagination is coming in Phase 2." />
        } />
        <Route path="/products/:id" element={
          <ComingSoon phase="Phase 3" title="Product Details"
            description="Detailed product pages with reviews and related products are coming in Phase 3." />
        } />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/search" element={
          <ComingSoon phase="Phase 2" title="Search Results"
            description="Search with filters and sorting is coming in Phase 2." />
        } />
        <Route path="/cart" element={
          <ComingSoon phase="Phase 4" title="Shopping Cart"
            description="The full cart experience is coming in Phase 4." />
        } />
        <Route path="/checkout" element={
          <ComingSoon phase="Phase 6" title="Checkout"
            description="Multi-step checkout is coming in Phase 6." />
        } />
        <Route path="/login" element={
          <ComingSoon phase="Phase 5" title="Login"
            description="Authentication pages are coming in Phase 5." />
        } />
        <Route path="/register" element={
          <ComingSoon phase="Phase 5" title="Register"
            description="Authentication pages are coming in Phase 5." />
        } />
        <Route path="/forgot-password" element={
          <ComingSoon phase="Phase 5" title="Forgot Password"
            description="Password recovery is coming in Phase 5." />
        } />
        <Route path="/wishlist" element={
          <ComingSoon phase="Phase 4" title="Wishlist"
            description="The wishlist page is coming in Phase 4." />
        } />
        <Route path="/account" element={
          <ComingSoon phase="Phase 7" title="My Account"
            description="The user dashboard is coming in Phase 7." />
        } />
        <Route path="/account/orders" element={
          <ComingSoon phase="Phase 7" title="My Orders"
            description="Order history is coming in Phase 7." />
        } />
        <Route path="/account/orders/:id" element={
          <ComingSoon phase="Phase 7" title="Order Details"
            description="Order tracking is coming in Phase 7." />
        } />
        <Route path="/account/addresses" element={
          <ComingSoon phase="Phase 7" title="My Addresses"
            description="Address management is coming in Phase 7." />
        } />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
}
