import React from "react";
import part1 from "../img/part1.png";
import part2 from "../img/part2.png";
import part3 from "../img/part3.png";
import part4 from "../img/part4.png";
import part5 from "../img/part5.png";

const Partners = () => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl mb-10 text-[#2B59C3]">Наши партнеры</h2>
      <div>
        <div className="flex justify-around  mb-6">
          <a className="w-60" target="_blank" href="https://cleverest.tech/">
            <img src={part1} />
          </a>
          <a className="w-60" target="_blank" href="https://microret.com/">
            <img src={part2} />
          </a>
          <a
            className="w-60 pt-6"
            target="_blank"
            href="https://www.mycloud.kg/"
          >
            <img src={part3} />
          </a>
        </div>
        <div className="flex justify-around">
          <a className="w-60" target="_blank" href="https://boomerang.kg/">
            <img src={part4} />
          </a>
          <a className="w-60" target="_blank" href="about:blank">
            <img src={part5} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
