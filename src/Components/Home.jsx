import React, { useContext } from 'react';
import { Button, Image, Flex, Row, Col } from 'antd';
import TrendingProducts from './TrendingProducts';
import TopRatedProducts from './TopRatedProducts';
import Sale from './Sale';
import Testimonial from './Testimonial';
import { ModeContext } from '../App';

const Home = () => {
  const { mode , inputSearch , setIputSearch } = useContext(ModeContext);
  return (
    <>
      {/* Hero Section */}
      <Flex
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '86vh',
          backgroundColor: mode ? "#CCCAF0" : "#1e1e2f",
          padding: "20px"
        }}
      >
        <Row
          style={{ width: "100%", maxWidth: "1200px" }}
          gutter={[32, 32]}
          align="middle"
        >
          <Col xs={24} md={12}>
            <Flex vertical style={{ gap: "24px" }}>
              <h1
                style={{
                  margin: 0,
                  fontSize: 40,
                  lineHeight: "50px",
                  color: mode ? "black" : "white"
                }}
              >
                70% off on all product sale
              </h1>
              <p style={{ color: mode ? "black" : "white", fontSize: 16 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
              </p>
              <Button
                style={{
                  backgroundColor: "purple",
                  width: "120px",
                  color: "white",
                  borderRadius: "40px",
                  height: "40px"
                }}
              >
                Order Now
              </Button>
            </Flex>
          </Col>

          <Col xs={24} md={12}>
            <Image
              src="sale.png"
              width="100%"
              style={{ maxWidth: "400px", margin: "0 auto", display: "block" }}
            />
          </Col>
        </Row>
      </Flex>

      {/* Other Sections */}
      <TrendingProducts />
      <TopRatedProducts />
      <Sale />
      <Testimonial />
    </>
  );
};

export default Home;
