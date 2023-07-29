import React, { useState } from "react";
import { useId } from "@react-aria/utils";
import Checkbox from "../Checkbox/Checkbox ";

const SearchComponent = () => {
  // const [searchQuery, setSearchQuery] = useState("");

  // const handleInputChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  return (
    <>
      <div className="relative ml-1.5">
        <input
          className="pl-8 w-64 pr-1 py-1.5 rounded-full border border-1 outline-none focus:ring focus:ring-blue-300"
          type="text"
          placeholder="Поиск..."
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-40 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M22 22l-6-6M10 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12z"
          />
        </svg>
      </div>
      <div className="text-[#2B59C3] ml-4 mt-6 text-xl  ">
        <div className="w-56 bg-[#FFFFFD] pt-[0.1px] mt-4 ml-1"></div>
        <h3 className="text-[#979797] ml-7 mt-1.5">Формат</h3>
        <Checkbox checkboxId="checkbox1" label="Все" />
        <div className="w-44 bg-[#FFFFFD] pt-[0.1px] ml-7 mb-1"></div>
        <Checkbox checkboxId="checkbox2" label="Онлайн курсы" />
        <div className="w-44 bg-[#FFFFFD] pt-[0.1px] ml-7 mb-1"></div>
        <Checkbox checkboxId="checkbox3" label="Оффлайн курсы" />
        <div className="w-44 bg-[#FFFFFD] pt-[0.1px] ml-7 mb-1"></div>
        <h3 className="text-[#979797] ml-7 mt-2">Стоимость</h3>
        <Checkbox checkboxId="checkbox1" label="Все" />
        <div className="w-44 bg-[#FFFFFD] pt-[0.1px] ml-7 mb-1"></div>
        <Checkbox checkboxId="checkbox2" label="Бесплатно" />
        <div className="w-44 bg-[#FFFFFD] pt-[0.1px] ml-7 mb-1"></div>
        <Checkbox checkboxId="checkbox3" label="До 10 000 сом" />
        <div className="w-44 bg-[#FFFFFD] pt-[0.1px] ml-7 mb-1"></div>
        <Checkbox checkboxId="checkbox3" label="До 15 000 сом" />
        <div className="w-44 bg-[#FFFFFD] pt-[0.1px] ml-7 mb-1"></div>
        <Checkbox checkboxId="checkbox3" label="Свыше 15 000 сом" />{" "}
        <button className="text-[#FFFFFF] text-sm ml-2">
          <span className="mr-2 text-xl">x</span> Сбросить фильтры
        </button>
      </div>
    </>
  );
};

export default SearchComponent;
