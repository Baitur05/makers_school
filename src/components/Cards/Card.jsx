import React from "react";

const Card = () => {
  return (
    <div className="flex justify-end mb-10">
      <div className="bg-white text-2xl font-semibold rounded-lg text-[#2B59C3] pt-3 pb-2 pr-2 pl-3 mr-10">
        <h2 className="text-center underline decoration-1 mb-1">
          Курс по Adobe Photoshop
        </h2>
        <ul class="text-xs font-normal list-disc ml-6 w-96">
          <li>
            Вы изучите лучшие и самые современные техники по выделения объектов.
          </li>
          <li> Вы начнете использовать в работе Гистограмму и круг HSL.</li>
          <li>
            Вы начнете разбираться в тонкостях настройки программы Photoshopчё
          </li>
          <li>Вы научитесь монтировать видео ролики прямо в photoshop</li>
          <li>Вы узнаете что такое синемаграфия и параллакс эффект</li>
          <li>Вы создадите более 7 новых работ для вашего портфолио.</li>
        </ul>
        <div className="text-xl mt-1">
          <h3>
            <span>//</span> Продолжительность курса: 2 месяца
          </h3>
          <h3>
            <span>//</span> 12 видеолекций
          </h3>
        </div>
        <div className="flex justify-between mt-4 pr-2">
          <p className=" text-[#14AE5C]">25 000 сом </p>
          <div>
            //
            {/* <label>{count}</label> <br /> */}
            {/* <i className="fa-regular fa-heart" onClick={increment}></i> */}
          </div>
        </div>
      </div>
      <div className="bg-white text-2xl font-semibold rounded-lg text-[#2B59C3] pt-3 pb-2 pr-2 pl-3 mr-10">
        <h2 className="text-center underline decoration-1 mb-1">
          Курс по Adobe Photoshop
        </h2>
        <ul class="text-xs font-normal list-disc ml-6 w-96">
          <li>
            Вы изучите лучшие и самые современные техники по выделения объектов.
          </li>
          <li> Вы начнете использовать в работе Гистограмму и круг HSL.</li>
          <li>
            Вы начнете разбираться в тонкостях настройки программы Photoshopчё
          </li>
          <li>Вы научитесь монтировать видео ролики прямо в photoshop</li>
          <li>Вы узнаете что такое синемаграфия и параллакс эффект</li>
          <li>Вы создадите более 7 новых работ для вашего портфолио.</li>
        </ul>
        <div className="text-xl">
          <h3>
            <span>//</span> Продолжительность курса: 2 месяца
          </h3>
          <h3>
            <span>//</span> 12 видеолекций
          </h3>
        </div>
        <div className="flex justify-between mt-4 pr-2">
          <p className=" text-[#14AE5C]">25 000 сом </p>
          <div>
            //
            {/* <label>{count}</label> <br /> */}
            {/* <i className="fa-regular fa-heart" onClick={increment}></i> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
