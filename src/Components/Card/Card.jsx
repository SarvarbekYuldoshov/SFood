import React from 'react'
import "./Card.css"
const Card = ({data}) => {
  return (
    <div className='card'>
      <div className='container card-container'>
        <ul className='card-list'>
        <img className='card-img' src={data.img} alt="" />
        <h1 className='card-title'>{data.title}</h1>
        <p className='card-text'>{data.text}</p>
        <li className='card-item'>
        <p className='card-text-a'>2.29 сум</p>
        <Button className='home-btn' onClick={showModal}>
        Заказать
      </Button>
      <Modal open={open} footer={null} onCancel={closeModal}>
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            rules={[
              { required: true, message: 'Ismingizni kiriting' },
              { min: 4, message: 'Ismingiz kamida 4 ta harfdan iborat bo\'lishi kerak' }
            ]}
          >
            <Input placeholder='Ismingizni kiriting' />
          </Form.Item>
          <Form.Item
            name="surname"
            rules={[
              { required: true, message: 'Familiyangizni kiriting' },
              { min: 4, message: 'Familiyangiz kamida 4 ta harfdan iborat bo\'lishi kerak' }
            ]}
          >
            <Input placeholder='Familiyangizni kiriting' />
          </Form.Item>
          <Form.Item
            name="number"
            rules={[
              { required: true, message: 'Raqamingizni kiriting' },
              { len: 9, message: 'Raqamingiz 9 ta raqamdan iborat bo\'lishi kerak' },
              { pattern: /^[0-9]+$/, message: 'Faqat raqam kiriting' }
            ]}
          >
            <Input addonBefore="+998" placeholder='Raqamingizni kiriting (9 ta raqam)' />
          </Form.Item>
          <Button onClick={sendMessage} type="primary">
            Yuborish
             </Button>
          </Form>
        </Modal>
        </li>
        </ul>
      </div>
    </div>
  )
}

export default Card

