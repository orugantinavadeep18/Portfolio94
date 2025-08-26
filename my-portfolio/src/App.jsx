import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import Services from "./Components/services";
import EcommerceServicePage from "./Components/Ecomm";
import BlogService from "./Components/BlogServicePage";
import PortfolioServicePage from "./Components/PortfolioServicePage";
import AdvertisementServicePage from "./Components/AdvertisementServicePage";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home page with all scrollable sections */}
        <Route path="/" element={<Home />} />
        <Route path="/ecommerce" element={<EcommerceServicePage />} />
        <Route path="/blog" element={<BlogService />} /> 
        <Route path="/portfolio" element={<PortfolioServicePage />} /> 
        <Route path="/advertisement" element={<AdvertisementServicePage/>}/>
        {/* Separate Services page */}
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;
