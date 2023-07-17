import React from "react";
import { Link } from "react-router-dom";

function AuthMainPage() {
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
            placeholder="Город проживания"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="bg-white hover:bg-[#2B59C3] py-2 px-8 rounded-lg mb-4 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white"
            placeholder="Название школы"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="bg-white hover:bg-[#2B59C3] py-2 px-8 rounded-lg mb-4 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white"
            placeholder="Номер школы"
          />
        </div>
        <div>
          <input
            type="text"
            className="bg-white hover:bg-[#2B59C3] py-2 px-8 rounded-lg mb-1 text-[#2B59C3] hover:text-white placeholder-[#2B59C3] hover:placeholder-white"
            placeholder="Номер класса"
          />
        </div>
        <div>
          <Link to="/...">
            <button
              type="button"
              className="bg-white hover:bg-[#2B59C3] pt-1 pb-1.5 px-14 rounded-lg mb-4 mt-6 text-[#2B59C3] hover:text-white"
            >
              Войти
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthMainPage;
