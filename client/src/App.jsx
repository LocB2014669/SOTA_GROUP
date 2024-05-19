import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./pages/home/HomePage";
import { ProductDetailPage } from "./pages/productDetails/ProductDetailPage";
import { ProductFilterPage } from "./pages/productFilter/ProductFilterPage";
import { NewsPage } from "./pages/news/NewsPage";
import { ContactPage } from "./pages/contact/ContactPage";
import { PolicyPage } from "./pages/policy/PolicyPage";
import { SupportChoseSize } from "./pages/suportChoseSize/SupportChoseSize";
import { NewsDetailsPage } from "./pages/news/newsDetails/NewsDetailsPage";
import { LoginPage } from "./pages/login/LoginPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { CartPage } from "./pages/cart/CartPage";
import { PaymentPage } from "./pages/payment/PaymentPage";

export default function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/products/:productId" element={<ProductDetailPage />} />
      <Route path="/products" element={<ProductFilterPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/contacts" element={<ContactPage />} />
      <Route path="/policy" element={<PolicyPage />} />
      <Route path="/supportSize" element={<SupportChoseSize />} />
      <Route path="/news/:newsId" element={<NewsDetailsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<PaymentPage />} />
    </Routes>
  );
}
