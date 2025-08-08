import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Staff from './pages/Staff';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
