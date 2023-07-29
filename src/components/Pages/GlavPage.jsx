import React from "react";
import Card from "../Cards/Card";
import Partners from "../Partners/Partners";
import Footer from "../Footer/Footer";
import MakersEdve from "../MakersEdve/MakersEdve";

const GlavPage = () => {
  return (
    <div>
      <div className="mt-40"></div>
      <Card />
      <MakersEdve />
      <Partners />
      <Footer />
    </div>
  );
};

export default GlavPage;
