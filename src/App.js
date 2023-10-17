import React, { useEffect, useRef, useState } from "react";
import './App.css';
import HeaderTop from "./components/HeaderTop";
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Videos from "./pages/Videos";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import FAQs from "./pages/FAQs";
import Login from "./pages/Login"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";



function App() {
  const [isSticky, setSticky] = useState(false);
  const headerTopRef = useRef(null); // Reference to measure the height of the HeaderTop

  useEffect(() => {
    const handleScroll = () => {
      if (headerTopRef.current) {
        setSticky(window.scrollY > headerTopRef.current.getBoundingClientRect().height);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <div ref={headerTopRef} className="headerWrapper">
          <HeaderTop />
          <div className={isSticky ? 'navbar sticky' : 'navbar'}>
            <Navbar />
            </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
