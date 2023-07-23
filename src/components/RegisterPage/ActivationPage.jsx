import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


function ActivationPage() {
  const { t } = useTranslation();
  return (
    <div className="text-center mt-[8%] text-white text-xl">
      <div className="mb-24">
        <h1 className="mx-auto text-6xl">
          maker
          <span className="bg-white text-black px-1">s</span>
        </h1>
      </div>
      <div className="text-center leading-[1.5] text-2xl">
        {t("to_your")}
        <br />
        {t("email_sent_link")}
        <br />
         {t("to_reset_your_password")}
      </div>
      <Link to="/password">
        <button className="my-10">Сюда &gt;</button>
      </Link>
      
      <div className="flex justify-center mt-10">
        <div className="w-1/3 bg-green-300 bg-opacity-20 border-blue-500 text-blue-700 p-2">
           {t("confirm_mail")}
          <p className="text-black">
            {t("if_the_letter_did_not_arrive")}
            <Link to="/forgot">
              <span className="text-red-500 pl-2">{t("repeat_activation")}</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActivationPage;
