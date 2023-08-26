import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './Homepage'
import About from './About';
import Team from './Team';
import Services from './Services';
import Appraisals from './Appraisals';
import ShopPage from './ShopPage';
import Cart from './Cart';

function App() {

  return (
    
      <Routes>
        <Route path="*" element={ <HomePage /> } />
        <Route path="about" element={ <About /> } />
        <Route path="team" element={ <Team /> } />
        <Route path="services" element={ <Services /> } />
        <Route path="appraisals" element={ <Appraisals /> } />
        <Route path="shoppage" element={ <ShopPage /> } />
        <Route path="cart" element={ <Cart /> } />
      </Routes>
    
  )
}

export default App
