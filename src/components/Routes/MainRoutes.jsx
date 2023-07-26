import React from "react";
import { Route, Routes } from "react-router-dom";
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
import GlavPage from "../Pages/GlavPage";

function MainRoutes() {
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
        <Route path="/goolePage" element={<GooglePage />} exact />
        <Route path="/..." element={<NotFoundPage />} exact />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
