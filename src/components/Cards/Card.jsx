import React from "react";
import { useTranslation } from "react-i18next";

const Card = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('adobe_photoshop')}</h2>
      <ul>
        <li>
          {t("adobe_photoshop-1")}
        </li>
        <li>{t("adobe_photoshop-2")}</li>
        <li>
          {t("adobe_photoshop-3")}
        </li>
        <li>{t("adobe_photoshop-4")}</li>
        <li>{t("adobe_photoshop-5")}</li>
        <li>{t("adobe_photoshop-6")}</li>
      </ul>
      <h3>{t("adobe_photoshop-7")}</h3>
      <h3>{t("adobe_photoshop-8")}</h3>
      <div>
        <p>{t("adobe_photoshop-9")}</p>
        <span></span>
      </div>
    </div>
  );
};

export default Card;
