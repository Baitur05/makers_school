import React, { useState } from "react";
import { useId } from "@react-aria/utils";

const SearchComponent = ({ label }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const checkboxId = useId();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="flex items-start justify-start mb-8 ml-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Введите запрос..."
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:ring focus:border-blue-300 outline-none w-64"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
          onClick={() => alert(`Выполнить поиск: ${searchQuery}`)}
        >
          Поиск
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id={checkboxId}
          className="form-checkbox h-5 w-5 text-blue-500"
          placeholder="Все"
        />
        <label htmlFor={checkboxId}>{label}</label>
      </div>
    </>
  );
};

export default SearchComponent;
