import React from "react";
import SearchComponent from "../Search/SearchComponent ";
import Card from "../Cards/Card";
import Partners from "../Partners/Partners";
import Footer from "../Footer/Footer";

const GlavPage = () => {
  return (
    <div>
      <div className="mt-40"></div>
      <SearchComponent />
      <Card />
      <Partners />
      <Footer />
    </div>
  );
};

export default GlavPage;
