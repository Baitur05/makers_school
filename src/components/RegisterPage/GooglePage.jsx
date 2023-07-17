import React from "react";
import { Link } from "react-router-dom";

function GooglePage() {
  return (
    <div className="text-center mt-[8%] text-white text-xl text-xl">
      <h1 className="mx-auto text-6xl">
        maker
        <span className="bg-white text-black px-1">s</span>
      </h1>
      <p className="text-white mt-8">Вход</p>
      <div className="px-[38%]">
        <input
          type="text"
          className="bg-white hover:bg-[#2B59C3] rounded-lg mb-1 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white  w-full py-2 px-4"
          placeholder="Телефон или адрес эл.почты"
          autoComplete="email"
          autoFocus
        />
        <Link to="/...">
          <a className="text-[#2B59C3] mb-4 pr-[9rem] text-lg hover:text-white text-base">
            Забыли адрес эл. почты?
          </a>
        </Link>
      </div>
      <p className="text-[#767e8c] text-base not-italic leading-5 mt-16 w-80 mx-auto text-left text-base">
        Приложению “Makers” будет предоставлен доступ к вашим данным: имени,
        адресу электронной почты, языковым настройкам и фото профиля. Прежде чем
        начать работу с приложением “Makers”, вы можете ознакомиться с его{" "}
        <span className="text-[#2B59C3]">
          политикой конфиденциальности и условиями использования.
        </span>
      </p>

      <div className="flex justify-center mt-10">
        <p className="py-2 text-base">Создать аккаунт</p>
        <Link to="/authPasswordPage">
          <button className="bg-white hover:bg-[#2B59C3]  rounded-lg  text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white px-10 py-2 ml-2">
            Продолжить
          </button>
        </Link>
      </div>
    </div>
  );
}

export default GooglePage;
