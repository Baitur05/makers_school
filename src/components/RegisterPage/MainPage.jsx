import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


const MainPage = ({ user, setUser }) => {
  const responseGoogle = (res) => {
    const details = jwtDecode(res.credential);
    console.log(res);
    console.log(details);
    // setUser(details);
  };

 
  const { t, i18n } = useTranslation();
  const [placeholderText, setPlaceholderText] = useState("");

  // const handleLanguageChange = (e) => {
  //   const newLanguage = e.target.value;
  //   console.log("Changing language to:", newLanguage);
  //   i18n.changeLanguage(newLanguage);
  // };

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    i18n.changeLanguage(newLanguage);
  };


  useEffect(() => {
    setPlaceholderText(t("google"));
  }, [t, i18n.language]);

  return (
    <>
      {/* <div className="flex items-center h-screen ">
        <h1 className="text-white mx-auto text-4xl">makers</h1>
      </div> */}
      
      {/*! Мультиязычный */}
      <div >
      <select onChange={handleLanguageChange} value={i18n.language}>
          <option value="ru">RU</option>
          <option value="kg">KG</option>
        </select>
      </div>

      <div className=" text-center mt-[8%] text-white text-xl">
        <div>
          <h1 className="lng-init mx-auto text-6xl">
            maker
            <span className="lng-init2 bg-white text-black px-1">s</span>
          </h1>
        </div>
        <Link to="/auth">
          <button
            type="button"
            className=" bg-white hover:bg-[#2B59C3] pt-1 pb-1.5 px-14 rounded-lg mb-4 mt-36 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white"
          >
            {t("to_come_in")}
          </button>
        </Link>
        <Link to="/authPasswordPage">
          <ul className="mt-7 mb-14">
            <a className=" text-[#2B59C3] hover:text-white" 
           >
              {t('register')}
            </a>
          </ul>
        </Link>
        <div className="flex justify-center">
          <p>______________</p>
          <p className=" mb-2 px-2 pt-2" >{t("or")}</p>
          <p>______________</p>
        </div>
        <button>
          <Link to="/goolePage">
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
                className=" bg-white hover:bg-[#2B59C3] py-2 px-7 rounded-lg mb-1 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white cursor-pointer"
                
                placeholder={placeholderText}
              />
            </div>
          </Link>
          <a
            href="/authPasswordPage"
            className=" text-[#2B59C3] mb-4 pl-20 text-lg hover:text-white"
        
          >
            {t('register')}
          </a>
        </button>
      </div>
    </>
  );
};

export default MainPage;
