import React from 'react';
import { useTranslation } from 'react-i18next';

const Card = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
      <div className="max-w-[1200px] bg-white rounded-lg shadow-lg gap-[30px] overflow-hidden transition-transform transform hover:scale-95 duration-300 w-[350px] h-[400px]  flex-wrap">
        <img
          className="w-full h-[200px] object-cover"
          src={data.img}
          alt={data.title}
        />
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-2">{data.title}</h1>
          <p className="text-gray-700 mb-4">{data.text}</p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold text-purple-700">2.29 сум</p>
            <button className="px-4 py-2 bg-purple-700 text-white rounded-lg transition duration-300 transform hover:scale-105 hover:bg-transparent hover:text-purple-700 border-2 border-purple-700">
              {t("Hover.Hover_text_9")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
