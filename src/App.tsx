import React, { Fragment, useState } from "react";

import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Navbar from "./components/GlobalComponents/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";
import Rent from "./pages/Rent";
import Sale from "./pages/Sale";
import Faq from "./pages/Faq";
import Pricing from "./pages/Pricing";
import PropertyDetail from "./pages/PropertyDetail";
import Footer from "./components/GlobalComponents/Footer";

const App: React.FC = () => {
  let [open, setOpen] = useState(false);
  return (
    <Fragment>
      <Navbar open={open} setOpen={setOpen} />
      <Routes>
        <Route path="/" element={<Home open={open} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/properties/for-rent" element={<Rent />} />
        <Route path="/properties/for-sale" element={<Sale />} />
        <Route
          path="/properties/for-sale/:externalId"
          element={<PropertyDetail />}
        />

        <Route
          path="/properties/for-rent/:externalId"
          element={<PropertyDetail />}
        />
        <Route path="/faq" element={<Faq />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
