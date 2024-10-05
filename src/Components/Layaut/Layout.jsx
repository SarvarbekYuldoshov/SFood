import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Layout = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-purple-700 py-6'>
      <div className='container mx-auto'>
        <ul className='flex flex-wrap justify-center gap-4'>
          <li className='layout-item'>
            <img src="" alt="" />
            <NavLink
              className='layout-link text-white bg-transparent hover:bg-white hover:text-purple-700 border-2 border-transparent px-4 py-2 rounded text-[18px] transition duration-500'
              to='/'
            >
              {t('layout.layout_1')}
            </NavLink>
          </li>
          <li className='layout-item'>
          <img src="" alt="" />
            <NavLink
              className='layout-link text-white bg-transparent hover:bg-white hover:text-purple-700 border-2 border-transparent px-4 py-2 rounded text-[18px] transition duration-500'
              to='/desert'
            >
              {t('layout.layout_2')}
            </NavLink>
          </li>
          <li className='layout-item'>
          <img src="" alt="" />
            <NavLink
              className='layout-link text-white bg-transparent hover:bg-white hover:text-purple-700 border-2 border-transparent px-4 py-2 rounded text-[18px] transition duration-500'
              to='/set'
            >
              {t('layout.layout_3')}
            </NavLink>
          </li>
          <li className='layout-item'>
            <NavLink
              className='layout-link text-white bg-transparent hover:bg-white hover:text-purple-700 border-2 border-transparent px-4 py-2 rounded text-[18px] transition duration-500'
              to='/xagi'
            >
              {t('layout.layout_4')}
            </NavLink>
          </li>
          <li className='layout-item'>
            <NavLink
              className='layout-link text-white bg-transparent hover:bg-white hover:text-purple-700 border-2 border-transparent px-4 py-2 rounded text-[18px] transition duration-500'
              to='/burger'
            >
              {t('layout.layout_5')}
            </NavLink>
          </li>
          <li className='layout-item'>
            <NavLink
              className='layout-link text-white bg-transparent hover:bg-white hover:text-purple-700 border-2 border-transparent px-4 py-2 rounded text-[18px] transition duration-500'
              to='/pizza'
            >
              {t('layout.layout_6')}
            </NavLink>
          </li>
          <li className='layout-item'>
            <NavLink
              className='layout-link text-white bg-transparent hover:bg-white hover:text-purple-700 border-2 border-transparent px-4 py-2 rounded text-[18px] transition duration-500'
              to='/sendvich'
            >
              {t('layout.layout_7')}
            </NavLink>
          </li>
          <li className='layout-item'>
            <NavLink
              className='layout-link text-white bg-transparent hover:bg-white hover:text-purple-700 border-2 border-transparent px-4 py-2 rounded text-[18px] transition duration-500'
              to='/xoddog'
            >
              {t('layout.layout_8')}
            </NavLink>
          </li>
          <li className='layout-item'>
            <NavLink
              className='layout-link text-white bg-transparent hover:bg-white hover:text-purple-700 border-2 border-transparent px-4 py-2 rounded text-[18px] transition duration-500'
              to='/free'
            >
              {t('layout.layout_9')}
            </NavLink>
          </li>
          <li className='layout-item'>
            <NavLink
              className='layout-link text-white bg-transparent hover:bg-white hover:text-purple-700 border-2 border-transparent px-4 py-2 rounded text-[18px] transition duration-500'
              to='/drink'
            >
              {t('layout.layout_10')}
            </NavLink>
          </li>
          <li className='layout-item'>
            <NavLink
              className='layout-link text-white bg-transparent hover:bg-white hover:text-purple-700 border-2 border-transparent px-4 py-2 rounded text-[18px] transition duration-500'
              to='/salad'
            >
              {t('layout.layout_11')}
            </NavLink>
          </li>
          <li className='layout-item'>
            <NavLink
              className='layout-link text-white bg-transparent hover:bg-white hover:text-purple-700 border-2 border-transparent px-4 py-2 rounded text-[18px] transition duration-500'
              to='/bread'
            >
              {t('layout.layout_12')}
            </NavLink>
          </li>
          <li className='layout-item'>
            <NavLink
              className='layout-link text-white bg-transparent hover:bg-white hover:text-purple-700 border-2 border-transparent px-4 py-2 rounded text-[18px] transition duration-500'
              to='/sauke'
            >
              {t('layout.layout_13')}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
