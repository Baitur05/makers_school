import React from "react";
import Card from "../Cards/Card";
import Partners from "../Partners/Partners";
import Footer from "../Footer/Footer";
import DesktopOne from "./DesktopOne";
import MakersEdve from "../MakersEdve/MakersEdve";

const NotFoundPage = () => {
  return (
    <div >
        <div className="mt-96"></div>
        <DesktopOne/>
        <MakersEdve/>
        
      {/* <Card /> */}
      <Partners />
      <Footer />
    </div>
  );
};

export default NotFoundPage;
