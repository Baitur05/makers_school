import React, { useState } from "react";
import "./App.css";
import MainRoutes from "./components/Routes/MainRoutes";
import Footer from "./components/Footer/Footer";
import Partners from "./components/Partners/Partners";
import Card from "./components/Cards/Card";

import SearchComponent from "./components/Search/SearchComponent ";
import { useTranslation } from "react-i18next";
import { Router } from "react-router-dom";

const App = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("ru");

  const changeLanguage = (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage).then(() => {
      i18n.services.backendConnector.reload(newLanguage, () => {
        console.log("Language reloaded:", newLanguage);
      });
    });
  };

  return (
    <div>
      <MainRoutes />
      {/* <div className="mt-96"></div> */}
      {/* <Card /> */}
      {/* <Partners />
      <Footer /> */}
    </div>
  );
};

export default App;
