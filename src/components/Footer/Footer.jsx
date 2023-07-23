import React from "react";
import inst from "../img/instagram.png";
import youtube from "../img/youtube.png";
import face from "../img/facebook.png";

const Footer = () => {
  return (
    <div className="bg-[#979797] flex text-[#FFFFFD]">
      <div>
        <h1 className="text-white mx-auto text-2xl">
          maker<span className="bg-white text-black px-1">s</span>
        </h1>
        <p>© 2023 Makers All rights reserved</p>
      </div>
      <div>
        <ul>
          <li>Курсы</li>
          <li>Расписание</li>
          <li>Поиск</li>
          <li>Войти</li>
        </ul>
      </div>
      <div>
        <p>Табышалиева 29, Бишкек, Кыргызстан</p>
        <div className>
          <a href="tel:+74951234567">+7 (495) 123-45-67</a>
        </div>
        <div>
          <span>
            <img src={inst} alt="inst" />
          </span>
          <span>
            <img src={youtube} alt="inst" />
          </span>
          <span>
            <img src={face} alt="inst" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
