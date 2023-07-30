import React, { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import MainPage from "../RegisterPage/MainPage";
import ForgotPage from "../RegisterPage/ForgotPage";
import ActivationPage from "../RegisterPage/ActivationPage";
import PasswordPage from "../RegisterPage/PasswordPage";
import AuthPasswordPage from "../RegisterPage/AuthPasswordPage";
import AuthMainPage from "../RegisterPage/AuthMainPage";
import GooglePage from "../RegisterPage/GooglePage";
import MainLayout from "../layouts/MainLayout";
import AuthPage from "../RegisterPage/AuthPage";
import NotFoundPage from "../RegisterPage/NotFoundPage";
import DesktopOne from "../RegisterPage/DesktopOne";
import DesktopTwo from "../RegisterPage/DesktopTwo";
import GlavPage from "../Pages/GlavPage";
import Card from "../Cards/Card";
import DesktopCoppi from "../RegisterPage/DesktopCoppi";
import MakersEdve from "../MakersEdve/MakersEdve";

function MainRoutes() {
  // const [showDesktopOne, setShowDesktopOne] = useState(true);
  // const [showDesktopTwo, setShowDesktopTwo] = useState(true);

  // const handleDesktopOneClose = () => {
  //   setShowDesktopOne(false);
  // };

  // const handleDesktopTwoClose = () => {
  //   setShowDesktopTwo(false);
  // };

  return (
    <Routes>
      <Route element={<MainLayout />} exact>
        <Route path="/" element={<MainPage />} exact />
        <Route path="/glav" element={<GlavPage />} exact />
        <Route path="/auth" element={<AuthPage />} exact />
        <Route path="/forgot" element={<ForgotPage />} exact />
        <Route path="/activation" element={<ActivationPage exact />} />
        <Route path="/password" element={<PasswordPage />} exact />
        <Route path="/authPasswordPage" element={<AuthPasswordPage exact />} />
        <Route path="/authMainPage" element={<AuthMainPage exact />} />
        <Route path="/googlePage" element={<GooglePage />} exact />
        <Route path="/appMainPage" element={<NotFoundPage />} exact />
        <Route path="/desktopUrl" element={<DesktopOne />} exact/>
        <Route path="/desktop" element={<DesktopTwo />} exact/>
        <Route path="/card" element={<Card/>} exact/>
        <Route path="/desktopCard" element={<DesktopCoppi/>} exact/>
        <Route path="/makers" element={<MakersEdve/>} exact/>
                

        
        {/* <Route
          path="/desktop"
          element={
            <div>
              {showDesktopOne && <DesktopOne onClose={handleDesktopOneClose} />}
              {showDesktopTwo && <DesktopTwo onClose={handleDesktopTwoClose} />}
            </div>
          }
        /> */}
      </Route>
    </Routes>
  );
}

export default MainRoutes;
