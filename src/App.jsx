import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer"
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import UseBlog from '../../dealer-portfolio/src/components/UseBlog';
import BlogDetails from '../../dealer-portfolio/src/components/BlogDetails';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
         <Route path="/blog" element={<UseBlog/>}/>
          <Route path="/blog/:id" element={<BlogDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
