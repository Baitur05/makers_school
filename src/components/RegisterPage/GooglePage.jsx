import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function GooglePage() {
  const { t } = useTranslation();
  return (
    <div className="text-center mt-[8%] text-white text-xl">
      <h1 className="mx-auto text-6xl">
        maker
        <span className="bg-white text-black px-1">s</span>
      </h1>
      <p className="text-white mt-8">{t("entrance")}</p>
      <div className="px-[38%]">
        <input
          type="text"
          className="bg-white hover:bg-[#2B59C3] rounded-lg mb-1 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white  w-full py-2 px-4"
          placeholder="Телефон или адрес эл.почты"
          autoComplete="email"
          autoFocus
        />
        <Link to="/...">
          <a className="text-[#2B59C3] mb-4 pr-[9rem] hover:text-white text-base">
            {t("forgot_address")}
          </a>
        </Link>
      </div>
      <p className="text-[#767e8c] not-italic leading-5 mt-16 w-80 mx-auto text-left text-base">
        {t("app_makers")}
        <span className="text-[#2B59C3]">{t("policy")}</span>
      </p>

      <div className="flex justify-center mt-10">
        <p className="py-2 text-base">{t("create_an_account")}</p>
        <Link to="/authPasswordPage">
          <button className="bg-white hover:bg-[#2B59C3]  rounded-lg  text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white px-10 py-2 ml-2">
            {t("continue")}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default GooglePage;