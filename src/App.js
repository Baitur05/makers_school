import React, { useState } from "react";
import "./App.css";
import MainRoutes from "./components/Routes/MainRoutes";
import Footer from "./components/Footer/Footer";
import Partners from "./components/Partners/Partners";
import Card from "./components/Cards/Card";
import { useTranslation } from "react-i18next";

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
      <div className="mt-96"></div>
      <Card />
      <MainRoutes />;
      <Partners />
      <Footer />
      {/* <div className="text-center mt-[8%] text-white text-xl">
        <select onChange={changeLanguage} value={language}>
          <option value="ru">RU</option>
          <option value="kg">KG</option>
        </select>
        <div>{t("text")}</div>
      </div> */}
    </div>
  );
};

export default App;
