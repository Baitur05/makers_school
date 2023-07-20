import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./18n"
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


// import i18n from "./18n";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector'
// import HttpApi from 'i18next-http-backend'
// import FallbackLoading from './FallbackLoading';

// ! Localisation
// i18n
// .use(initReactI18next) 
// .use(LanguageDetector)
// .use(HttpApi)
// .init({
//   supportedLngs: ["ru", "ky"],
//   fallbacklng: "ru",
//   detection : {
//     order: ["cookie", "localStorage"],
//     caches: ["localStorage"]
//   },
//   backend: {
//     loadPath : '/assets/locales/{{lng}}/translation.json'
//   }
// })

i18n.use(initReactI18next).use(LanguageDetector).init({
  // Настройки и конфигурация i18next
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<div>Loading...</div>}>
  <BrowserRouter>
    {/* <AuthContext> */}
    <App />
    {/* </AuthContext> */}
  </BrowserRouter>
  </Suspense>
);






