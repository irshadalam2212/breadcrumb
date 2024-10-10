import './App.css';
import Home from './pages/home';
import Product from './pages/products'
import { Navigate, Routes, Route } from "react-router-dom"
import Homepage from './pages/homepage';
import About from './pages/about';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Routes>
      <Route index element={<Navigate replace to="home" />} />
      <Route path="/" element={<Home />}>
        <Route path="home" element={<Homepage />} />
        <Route path="products" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
      </Route>
    </Routes>
  );
}

export default App;
