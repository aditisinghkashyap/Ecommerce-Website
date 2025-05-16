import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Select, Button, Modal } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';

const { Option } = Select;

const CheckoutPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Form submitted:', values);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleBack = () => {
    navigate('/cart');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px',
      }}
    >
      <div style={{ width: '100%', maxWidth: 600, textAlign: 'center' }}>
        <h2>2. Delivery Address</h2>
        <p style={{ color: 'red', marginBottom: '20px' }}>
          All fields are required*
        </p>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email Address"
            name="email"
            rules={[{ required: true, message: 'Please enter your email address' }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: 'Please enter your full name' }]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: 'Please enter your phone number' }]}
          >
            <Input placeholder="Enter your phone number" />
          </Form.Item>

          <Form.Item
            label="Full Address"
            name="address"
            rules={[{ required: true, message: 'Please enter your full address' }]}
          >
            <Input.TextArea rows={3} placeholder="Enter your complete address" />
          </Form.Item>

          <Form.Item
            label="Payment Method"
            name="paymentMethod"
            rules={[{ required: true, message: 'Please select a payment method' }]}
          >
            <Select placeholder="Select payment method">
              <Option value="upi">UPI</Option>
              <Option value="cod">Cash on Delivery</Option>
              <Option value="debit">Debit Card</Option>
              <Option value="credit">Credit Card</Option>
            </Select>
          </Form.Item>

          <Form.Item style={{ textAlign: 'center' }}>
            <Button  style={{ marginRight: '10px',backgroundColor:"pink" }} onClick={handleBack}>
              Back to Cart
            </Button>
            <Button  htmlType="submit" style={{backgroundColor:"purple"}}>
              Order Now
            </Button>
          </Form.Item>
        </Form>
      </div>

      <Modal
        title={
          <span style={{ color: '#52c41a', fontWeight: 'bold' }}>
            <CheckCircleTwoTone twoToneColor="#52c41a" /> Congratulations!
          </span>
        }
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleOk}
        okText="OK"
        cancelButtonProps={{ style: { display: 'none' } }}
        centered
      >
        <p style={{ fontSize: '16px', color: '#555', textAlign: 'center' }}>
          Your order has been placed successfully!
        </p>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
