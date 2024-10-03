import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-purple-700 text-white p-6 relative bottom-0 w-full">
      <div className="container mx-auto">
        <ul className="flex justify-between flex-wrap">
          <li className="flex gap-[100px]">
            <a href="#" className="text-3xl font-bold font-dancing">SFood</a>
            <NavLink className="bloc bg-transparent text-lg mt-2" to="/number">{t('fooder.fooder__link_1')}</NavLink>
            <NavLink className="block text-lg mt-2" to="/hero">{t('fooder.fooder__link_2')}</NavLink>
            <NavLink className="block text-lg mt-2" to="/about">{t('fooder.fooder__link_3')}</NavLink>
            <NavLink className="block text-lg mt-2" to="/hover">{t('fooder.fooder__link_4')}</NavLink>
          </li>
          <div className="text-center">
            <a href="#" className="text-lg">{t('fooder.fooder__link_6')}</a>
            <p className="mt-2">{t('fooder.fooder__text')}</p>
            <p>+998942390426</p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
