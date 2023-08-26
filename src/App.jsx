import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './Homepage'
import About from './About';

function App() {

  return (
    
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="about" element={<About />} />
      </Routes>
    
  )
}

export default App
