import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BarLoader } from "react-spinners";

const MainPage = ({ user, setUser }) => {
  const [isLoading, setIsLoading] = useState(true);
  const responseGoogle = (res) => {
    const details = jwtDecode(res.credential);
    console.log(res);
    console.log(details);
    // setUser(details);
  };
  useEffect(() => {
    // Имитация задержки перед отображением контента
    const delay = 3000; // Время задержки в миллисекундах (в данном примере 2 секунды)

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    // Очистка таймера при размонтировании компонента (чтобы избежать утечки памяти)
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-white mx-auto text-5xl mb-5">
              maker<span className="bg-white text-black px-1">s</span>
            </h1>
            <BarLoader color="#2B59C3" speedMultiplier={1} width={200} />
          </div>
        ) : (
          <div className="text-center mt-[8%] text-white text-xl">
            <div>
              <h1 className="mx-auto text-6xl">
                maker
                <span className="bg-white text-black px-1">s</span>
              </h1>
            </div>
            <Link to="/auth">
              <button
                type="button"
                className="bg-white hover:bg-[#2B59C3] pt-1 pb-1.5 px-14 rounded-lg mb-4 mt-36 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white"
              >
                Войти
              </button>
            </Link>
            <Link to="/authPasswordPage">
              <ul className="mt-7 mb-14">
                <a className="text-[#2B59C3] hover:text-white">
                  Зарегистрироваться
                </a>
              </ul>
            </Link>
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
        )}
      </div>
    </>
  );
};

export default MainPage;
