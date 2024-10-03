import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Rasm_1 from "../images/icon.png"

const Header = () => {
  const { t, i18n } = useTranslation();

  // LocalStorage orqali tilni yuklash
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  // Tilni o'zgartirish va localStorage-ga saqlash
  const handleLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  return (
    <div className="fixed top-0 left-0 right-0 shadow-md bg-white z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <ul className="flex items-center gap-4 lg:gap-12 text-sm lg:text-base">
          <li>
            <a className="text-purple-600 font-dancing-script text-xl lg:text-2xl font-bold" href="#">
              SFood
            </a>
          </li>
          <li className=''>
            <img className='w-[30px] h-[30px]' src={Rasm_1} alt="" />
          </li>
          <li>
            <NavLink className="py-1 px-2 transition-all hover:text-purple-600" activeClassName="active" to="/">
              {t('header.header_1')}
            </NavLink>
          </li>
          <li>
            <NavLink className="py-1 px-2 transition-all hover:text-purple-600" activeClassName="active" to="/number">
              {t('header.header_2')}
            </NavLink>
          </li>
          <li>
            <NavLink className="py-1 px-2 transition-all hover:text-purple-600" activeClassName="active" to="/about">
              {t('header.header_3')}
            </NavLink>
          </li>
          <li>
            <NavLink className="py-1 px-2 transition-all hover:text-purple-600" activeClassName="active" to="/hover">
              {t('header.header_4')}
            </NavLink>
          </li>
        </ul>

        <ul className="flex items-center gap-2 lg:gap-6 text-sm">
          <li>
            <select
              className="border border-gray-300 rounded py-1 px-2 text-sm"
              defaultValue={i18n.language}
              onChange={handleLanguage}
            >
              <option value="ru">RU</option>
              <option value="en">EN</option>
              <option value="uz">UZ</option>
            </select>
          </li>
          <li className="flex items-center">
            <Link to="/paket">
              <a className="text-xl text-gray-600">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                </svg>
              </a>
            </Link>
            <NavLink className="text-xs lg:text-sm text-white bg-purple-600 hover:bg-transparent hover:text-purple-600 border border-purple-600 py-1 px-3 lg:py-2 lg:px-4 ml-2 lg:ml-4 transition-all" to="/button">
              {t('header.header_5')}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
