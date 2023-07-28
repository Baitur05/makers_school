import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function AuthMainPage() {
  const { t, i18n } = useTranslation();
  const [placeholderText3, setPlaceholderText3] = useState("");
  const [placeholderText4, setPlaceholderText4] = useState("");
  const [placeholderText5, setPlaceholderText5] = useState("");
  const [placeholderText6, setPlaceholderText6] = useState("");

  useEffect(() => {
    setPlaceholderText3(t("city_of_residence"));
  }, [t, i18n.language]);

  useEffect(() => {
    setPlaceholderText4(t("school_name"));
  }, [t, i18n.language]);

  useEffect(() => {
    setPlaceholderText5(t("school_number"));
  }, [t, i18n.language]);

  useEffect(() => {
    setPlaceholderText6(t("class_number"));
  }, [t, i18n.language]);

  return (
    <div className="text-center mt-[8%] text-white text-xl">
      <div>
        <h1 className="mx-auto text-6xl">
          maker
          <span className="bg-white text-black px-1">s</span>
        </h1>
      </div>
      <div className="textFild" style={{ marginTop: "70px" }}>
        <div className="mb-4">
          <input
            type="text"
            className="bg-white hover:bg-[#2B59C3] py-2 px-8 rounded-lg mb-4 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white"
            placeholder={placeholderText3}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="bg-white hover:bg-[#2B59C3] py-2 px-8 rounded-lg mb-4 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white"
            placeholder={placeholderText4}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="bg-white hover:bg-[#2B59C3] py-2 px-8 rounded-lg mb-4 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white"
            placeholder={placeholderText5}
          />
        </div>
        <div>
          <input
            type="text"
            className="bg-white hover:bg-[#2B59C3] py-2 px-8 rounded-lg mb-1 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white"
            placeholder={placeholderText6}
          />
        </div>
        <div>
          <Link to="/appMainPage">
            <button
              type="button"
              className="bg-white hover:bg-[#2B59C3] pt-1 pb-1.5 px-14 rounded-lg mb-4 mt-6 text-[#2B59C3] hover:text-white"
            >
              {t("to_come_in")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthMainPage;
