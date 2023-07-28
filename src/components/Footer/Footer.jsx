import React from "react";
import inst from "../img/instagram.png";
import youtube from "../img/youtube.png";
import face from "../img/facebook.png";
import maker from "../img/Combined Shape.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  
  const { t } = useTranslation();
  return (
    <div className="flex justify-between px-20 pt-5 pb-8 bg-[#979797] text-[#FFFFFD]">
      <div>
        <h1 className="w-44 mb-4">
          <img src={maker} alt="maker" />
        </h1>
        <p>© 2023 Makers All rights reserved</p>
      </div>
      <div className="cursor-pointer">
        <ul>
          <li>{t("desktopTwo-1")}</li>
          <li>{t("desktopTwo-2")}</li>
          <li>{t("desktopTwo-3")}</li>
          <li>{t("to_come_in")}</li>
        </ul>
      </div>
      <div>
        <p>Табышалиева 29, Бишкек, Кыргызстан</p>
        <div className="mt-1">
          <a href="tel:+74951234567">+7 (495) 123-45-67</a>
        </div>
        <div className="flex mt-2">
          <a
            className="mr-2"
            target="_blank"
            href="https://www.instagram.com/makerskg/"
          >
            <img src={inst} alt="inst" />
          </a>
          <a
            className="mr-2"
            target="_blank"
            href="https://www.youtube.com/@makersbootcamp224/"
          >
            <img src={youtube} alt="youtube" />
          </a>
          <a target="_blank" href="https://www.facebook.com/makerskg/">
            <img src={face} alt="face" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
