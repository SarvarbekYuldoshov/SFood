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
