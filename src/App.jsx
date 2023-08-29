import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './Homepage'
import About from './About';
import Team from './Team';
import Services from './Services';
import Appraisals from './Appraisals';
import ShopPage from './ShopPage';
import Cart from './Cart';
import FormPage from './FormPage';
import { useState } from "react";
import { useLocation } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';

function App() {
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([])
  const { pathname } = useLocation();
  const [totalValue, setTotalValue] = useState(0);
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [val3, setVal3] = useState(0);
  const [showCart, setShowCart] = useState(false)

  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="formpage" element={<FormPage />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="services" element={<Services />} />
        <Route path="appraisals" element={<Appraisals />} />
        <Route path="shoppage" element={<ShopPage />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
