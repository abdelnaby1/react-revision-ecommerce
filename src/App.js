import "./App.css";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductList";
import Slider from "./components/Slider";
import { Routes, Route } from 'react-router-dom';

import About from "./components/About";
import ProductDetailsPage from './components/ProductDetailsPage'
import AdminHomePage from "./components/admin/AdminHomePage";
import Footer from "./components/Footer";
import AdminProductsPage from "./components/admin/AdminProductsPage";
import AddProductPage from "./components/admin/AddProductPage";
import AdminProductDetails from "./components/admin/AdminProductDetailsPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Slider />
          <ProductsList />
        </>} />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetailsPage />} />
        <Route path="admin" element={<AdminHomePage />} />
        <Route path="admin/products" element={<AdminProductsPage />} />
        <Route path="admin/products/add" element={<AddProductPage />} />
        <Route path="admin/products/:productId" element={<AdminProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
