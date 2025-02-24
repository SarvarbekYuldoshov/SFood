import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Rasm_1 from "../images/icon.png"; 
import { Dropdown } from 'antd';

const Header = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const handleLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  const items = [
    {
      key: '1',
      label: (
        <ul className='flex flex-col gap-2'>
          <Link to="#home1">
            <p>{t('header.header_1')}</p>
          </Link>
          <Link to="#home2">
            <p> {t('header.header_2')}</p>
          </Link>
          <Link to="#home3">
            <p> {t('header.header_3')}</p>
          </Link>
          <Link to="#home4">
            <p> {t('header.header_4')}</p>
          </Link>
        </ul>
      ),
    },
  ];  
  
  return (
    <div className="fixed top-0 left-0 right-0 shadow-md bg-white z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <ul className="flex items-center gap-4 lg:gap-12 text-sm lg:text-base">
          <li>
            <Link to="/" className='text-purple-600 font-dancing-script lg:text-4xl font-bold transform  inline-block hover:text-purple-800 transition duration-300 ease-in-out shadow-lg" href="#"'>SFood</Link>    
          </li>
          <li>
            <div className='hidden xl:hidden max-md:block'>
              <Dropdown
                className="w-[70px]"
                menu={{ items }} 
                placement="bottomRight"
              >
                <button className="flex items-center gap-3 bg-transparent text-white">
                  <img className='w-[30px] h-[30px]' src={Rasm_1} alt="" />
                  <span className="text-white text-lg font-semibold">{t("header.header_text_29")}</span>
                </button>
              </Dropdown>
            </div>
          </li>
          <li>
            <NavLink className="py-1 px-2 transition-all hover:text-purple-600 text-[25px] max-md:hidden" to="/">
              {t('header.header_1')}
            </NavLink>
          </li>
          <li>
            <NavLink className="py-1 px-2 transition-all hover:text-purple-600 text-[25px] max-md:hidden" to="/number">
              {t('header.header_2')}
            </NavLink>
          </li>
          <li> 
            <NavLink className="py-1 px-2 transition-all hover:text-purple-600 text-[25px] max-md:hidden" to="/about">
              {t('header.header_3')}
            </NavLink>
          </li>
          <li>
            <NavLink className="py-1 px-2 transition-all hover:text-purple-600 text-[25px] max-md:hidden" to="/hover">
              {t('header.header_4')}
            </NavLink>
          </li>
        </ul>

        <ul className="flex items-center gap-2 lg:gap-6 text-sm">
          <li>
            <select
              className="border border-none rounde text-[20px]"
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
              <svg className='w-[25px] h-[30px]' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
              </svg>
            </Link>
            <NavLink className="text-xs lg:text-sm text-white bg-purple-600 hover:bg-transparent hover:text-purple-600 border border-purple-600 py-1 px-3 lg:py-2 lg:px-4 ml-2 lg:ml-4 transition-all max-sm:hidden" to="/">
              {t('header.header_5')}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;






import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Modal, message, Input, Form } from 'antd';
import Rasm_1 from "../images/icon.png";

const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const sendMessage = () => {
    form.validateFields()
      .then(values => {
        const { name, surname, number } = values;
        const token = "7288526920:AAH-vd_HYqMjr_qE5zG6idFBNxfFeMi9aFo";
        const chat_id = "6801549705";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const messageText = `Ism: ${name}\nFamiliya: ${surname}\nNumber: ${number}`;

        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id, text: messageText })
        })
          .then(res => res.json())
          .then(() => {
            message.success("Yuborildi");
            setOpen(false);
            form.resetFields();
          })
          .catch(() => {
            message.error("Yuborishda xatolik yuz berdi");
          });
      })
      .catch(() => {
        message.error("Iltimos, barcha maydonlarni to'ldiring!");
      });
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center gap-4">
        <img src={Rasm_1} alt="Logo" className="w-10 h-10" />
        <h1 className="text-lg font-bold">{t("header.title")}</h1>
      </div>

      <Button onClick={() => setOpen(true)} className="bg-red-600 text-white px-4 py-2 rounded">
        {t("button.text")}
      </Button>

      <Modal open={open} footer={null} onCancel={() => setOpen(false)}>
        <h1 className='flex items-center justify-center text-2xl md:text-3xl'>Malumotlarni to'ldiring</h1>
        <p className='text-center text-lg md:text-xl text-blue-600'>
          Biz siz bilan imkon qadar tez bog`lanamiz va sizning mahsulotingizni yetkazib beramiz. Xizmatimiz bepul!
        </p>
        <Form form={form} layout="vertical">
          <Form.Item
            label="Ism"
            name="name"
            rules={[{ required: true, message: 'Ismingizni kiriting' }, { min: 5, message: "Ism 5 ta belgidan kam bo'lmasligi kerak" }]}
          >
            <Input placeholder='Ismingizni kiriting' />
          </Form.Item>
          <Form.Item
            label="Familiya"
            name="surname"
            rules={[{ required: true, message: 'Familiyangizni kiriting' }, { min: 5, message: "Familiya 5 ta belgidan kam bo'lmasligi kerak" }]}
          >
            <Input placeholder='Familiyangizni kiriting' />
          </Form.Item>
          <Form.Item
            label="Telefon Raqami"
            name="number"
            rules={[{ required: true, message: 'Raqamingizni kiriting' }, { pattern: /^\+998\d{9}$/, message: 'Telefon raqam +998 bilan boshlanib, 9 ta raqam bilan davom etishi kerak' }]}
          >
            <Input placeholder='+998' />
          </Form.Item>
          <Button className='w-full h-[50px]' onClick={sendMessage} type="primary">
            Yuborish
          </Button>
        </Form>
      </Modal>
    </header>
  );
};

export default Header;

