import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";



const AuthPage = ({ user, setUser }) => {
  const responseGoogle = (res) => {
    const details = jwtDecode(res.credential);
    console.log(res);
    console.log(details);
    // setUser(details);
  };

  const { t, i18n } = useTranslation();
  const [placeholderText, setPlaceholderText] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setPlaceholderText(t("google"));
  }, [t, i18n.language]);

  // const handlePasswordToggle = () => {
  //   setShowPassword((prevShowPassword) => !prevShowPassword);
  // };

  return (
    <div className="text-center mt-[8%] text-white text-xl">
      <div className="mb-24">
        <h1 className="mx-auto text-6xl">
          maker
          <span className="bg-white text-black px-1">s</span>
        </h1>
      </div>
      <form className="mt-8">
        <div className="mb-4">
          <input
            type="email"
            className="bg-white hover:bg-[#2B59C3] py-2 px-8 rounded-lg mb-4 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white"
            placeholder="Email"
          />
        </div>
        <div className="password__div">
          <input
            type="password"
            className="bg-white hover:bg-[#2B59C3] py-2 px-8 rounded-lg mb-1 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white"
            placeholder="Пароль"
          />
          <div className="password__btn"><img className="img__btn" src="https://cdn-icons-png.flaticon.com/512/6684/6684701.png" alt="img"/></div>
        </div>
        <div className="mb-4 pl-40 text-lg">
          <a href="/forgot" className="text-[#2B59C3] hover:text-white">
            {t("forgot_password")}
          </a>
        </div>
        <Link to="/appMainPage">
        <button
          type="button"
          className="bg-white hover:bg-[#2B59C3] pt-1 pb-1.5 px-14 rounded-lg mb-4 mt-6 text-[#2B59C3] hover:text-white"
        >
         {t('to_come_in')}
        </button>
        </Link>
      </form>
      <ul className="mt-7 mb-18"></ul>
      <div className="flex justify-center">
        <p>______________</p>
        <p className="mb-2 px-2 pt-2">{t("or")}</p>
        <p>______________</p>
      </div>
      <button>
        <Link to="/googlePage">
          <div>
            {/* <GoogleOAuthProvider clientId="151557883450-ellj7a9fr46a4cadbi2d8tkfk0mq9jm1.apps.googleusercontent.com">
          <GoogleLogin
            className="google-login-button"
            onSuccess={responseGoogle}
            onError={responseGoogle}
          ></GoogleLogin>
        </GoogleOAuthProvider> */}
            {/* Для гугла второй вариант */}
            <input
              className="bg-white hover:bg-[#2B59C3] py-2 px-7 rounded-lg mb-1 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white cursor-pointer"
                placeholder={placeholderText}
            />
          </div>
        </Link>
        <a
          href="/authPasswordPage"
          className="text-[#2B59C3] mb-4 pl-20 text-lg hover:text-white"
        >
        {t('register')}
        </a>
      </button>
    </div>
  );
};
export default AuthPage;
