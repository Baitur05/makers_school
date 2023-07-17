import React from "react";
import { Link } from "react-router-dom";

function ActivationPage() {
  return (
    <div className="text-center mt-[8%] text-white text-xl">
      <div className="mb-24">
        <h1 className="mx-auto text-6xl">
          maker
          <span className="bg-white text-black px-1">s</span>
        </h1>
      </div>
      <div className="text-center leading-[1.5] text-2xl">
        На вашу
        <br />
        почту отправлена ссылка
        <br />
        для сброса пароля
      </div>
      <Link to="/password">
        <button className="my-10">Сюда</button>
      </Link>
      <div className="flex justify-center mt-10">
        <div className="w-1/3 bg-green-300 bg-opacity-20 border-blue-500 text-blue-700 p-2">
          Подтвердите почту, чтобы активировать аккаунт
          <p className="text-black">
            Если письмо не пришло, проверьте папку "спам" или
            <Link to="/forgot">
              <span className="text-red-500 pl-2">повторите активацию</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActivationPage;
