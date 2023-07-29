import React from "react";
import maker from "../img/Combined Shape.png";
import MakersEdveData from "./MakersEdveData";

const MakersEdve = () => {
  return (
    <div className="flex justify-around  text-[#FFFFFF] my-28">
      <div className="mt-36">
        <img src={maker} alt="maker" />
      </div>
      <div
        className="ml-4 pt-6 pb-4 pl-8 pr-4 bg-[#1B1C1F] rounded-3xl"
        style={{
          boxShadow: "0 4px 50px 60px rgba(0, 0, 0, 0.5)",
        }}
      >
        {MakersEdveData.map((value, index) => {
          return (
            <div className="flex mb-4" key={index}>
              <span className="bg-[#2B59C3] px-3 py-2 border border-white rounded-lg">
                {value.number}
              </span>
              <p className="pt-2 ml-2">
                {value.info}{" "}
                <div className="w-96 bg-[#FFFFFD] pt-[0.1px] mb-1"></div>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MakersEdve;
