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
import Card from './Card';
import CartCard from './CartCard';


function App() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cartContents, setCartContents] = useState([]);

//  const handleClick = () => {
//         let sum = 0;
//         for (let i = 0; i < cartContents.length; i++) {
//             let item = cartContents[i];
//             sum = sum + item.count;
//         }
//         setTotalValue(sum)
//         console.log(cartContents)
//         console.log(sum)
//         console.log(totalValue)
//     }


  return (
    <div>
      <Header
        totalValue={totalValue}
        cartContents={cartContents}
        // handleClick={handleClick}
      />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="formpage" element={<FormPage />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="services" element={<Services />} />
        <Route path="appraisals" element={<Appraisals />} />
        <Route path="shoppage" element={<ShopPage
          loading={loading}
          setLoading={setLoading}
          error={error}
          setError={setError}
          data={data}
          setData={setData}
          totalValue={totalValue}
          setTotalValue={setTotalValue}
          showCart={showCart}
          setShowCart={setShowCart}
          cartContents={cartContents}
          setCartContents={setCartContents}
        />} />
        <Route path="cart" element={<Cart
          cartContents={cartContents}
        />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
