import "./App.css";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductList";
import Slider from "./components/Slider";
import { Routes, Route } from 'react-router-dom';

import About from "./components/About";
import ProductDetailsPage from './components/ProductDetailsPage'
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
      </Routes>

    </>
  );
}

export default App;
