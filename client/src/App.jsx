import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./pages/home/HomePage";
import { ProductDetailPage } from "./pages/productDetails/ProductDetailPage";
import { ProductFilterPage } from "./pages/productFilter/ProductFilterPage";

export default function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductDetailPage />} />
      <Route path="/product" element={<ProductFilterPage />} />
    </Routes>
  );
}
