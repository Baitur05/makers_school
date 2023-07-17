import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

function AuthPasswordPage() {
  const responseGoogle = (res) => {
    const details = jwtDecode(res.credential);
    console.log(res);
    console.log(details);
    // setUser(details);
  };
  return (
    <div className="text-center mt-[8%] text-white text-xl">
      <div>
        <h1 className="mx-auto text-6xl">
          maker
          <span className="bg-white text-black px-1">s</span>
        </h1>
      </div>
      <div className="mt-10">
        <div>
          <input
            type="email"
            className="bg-white hover:bg-[#2B59C3] py-2 px-8 rounded-lg mb-4 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="Password"
            className="bg-white hover:bg-[#2B59C3] py-2 px-8 rounded-lg mb-4 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white"
            placeholder="Пароль"
          />
        </div>
        <div>
          <input
            type="Password"
            className="bg-white hover:bg-[#2B59C3] py-2 px-8 rounded-lg mb-1 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white"
            placeholder="Повторите пароль"
          />
        </div>
        <div>
          <Link to="/authMainPage">
            <button
              type="button"
              className="bg-white hover:bg-[#2B59C3] py-2 px-12 rounded-lg mb-10 mt-14 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white"
            >
              Продолжить
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <p>______________</p>
        <p className="mb-2 px-2 pt-2">или</p>
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
              className="bg-white hover:bg-[#2B59C3] py-2 px-7 rounded-lg mb-1 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white cursor-pointer"
              placeholder="Войти через Google"
            />
          </div>
        </Link>
        <a
          href="/authPasswordPage"
          className="text-[#2B59C3] mb-4 pl-20 text-lg hover:text-white"
        >
          Зарегистрироваться
        </a>
      </button>
    </div>
  );
}

export default AuthPasswordPage;