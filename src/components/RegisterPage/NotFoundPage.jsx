import React from "react";
import Card from "../Cards/Card";
import Partners from "../Partners/Partners";
import Footer from "../Footer/Footer";
import DesktopOne from "./DesktopOne";

const NotFoundPage = () => {
  return (
    <div >
        <div className="mt-96"></div>
        <DesktopOne/>
      {/* <Card /> */}
      <Partners />
      <Footer />
    </div>
  );
};

export default NotFoundPage;
