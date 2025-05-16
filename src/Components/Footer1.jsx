import React from 'react';
import { Flex, Typography, Row, Col } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShopify, faLinkedin, faInstagram, faFacebookF, faGoogle
} from '@fortawesome/free-brands-svg-icons';
import {
  faAddressCard, faPhone
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Footer1 = () => {
  return (
    <div style={{ background: "#585d78", color: "white", padding: "30px 20px" }}>
      <Row gutter={[24, 24]} justify="center">
        {/* Branding and Description */}
        <Col xs={24} sm={24} md={12} lg={8}>
          <Flex style={{ gap: "10px", alignItems: "center" }}>
            <FontAwesomeIcon icon={faShopify} size="2x" />
            <Title level={3} style={{ color: "white", margin: 0 }}>Shopping App</Title>
          </Flex>
          <Paragraph style={{ marginTop: "10px", color: "white" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi Lorem ipsum dolor.
          </Paragraph>
        </Col>

        {/* Important Links */}
        <Col xs={24} sm={12} md={6} lg={4}>
          <Title level={4} style={{ color: "white" }}>Important Links</Title>
          <Flex vertical gap={10}>
            <Link style={{ color: "white", fontWeight: "600" }} to="/">Home</Link>
            <Link style={{ color: "white", fontWeight: "600" }} to="/kids-wear">Kid's Wear</Link>
            <Link style={{ color: "white", fontWeight: "600" }} to="/women-wear">Women's Wear</Link>
            <Link style={{ color: "white", fontWeight: "600" }} to="/men-wear">Men's Wear</Link>
          </Flex>
        </Col>

        {/* Social Links */}
        <Col xs={12} sm={6} md={6} lg={4}>
          <Title level={4} style={{ color: "white" }}>Social Links</Title>
          <Flex vertical gap={15} style={{ paddingLeft: "10px" }}>
            <a style={{ color: "white" }} href="https://www.linkedin.com/in/aditi-kashyap-08870b1a3/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a style={{ color: "white" }} href="https://www.instagram.com/aditi.singh.kashyap/?igsh=MW9lNXUybXJ0enR1#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a style={{ color: "white" }} href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
          </Flex>
        </Col>

        {/* Contact Info */}
        <Col xs={12} sm={6} md={6} lg={6}>
          <Title level={4} style={{ color: "white" }}>Contact Details</Title>
          <Flex align="center" gap={10} style={{ marginBottom: "10px" }}>
            <FontAwesomeIcon icon={faAddressCard} size="lg" />
            <Paragraph style={{ color: "white", margin: 0 }}>Bengaluru, Karnataka</Paragraph>
          </Flex>
          <Flex align="center" gap={10} style={{ marginBottom: "10px" }}>
            <FontAwesomeIcon icon={faPhone} size="lg" />
            <Paragraph style={{ color: "white", margin: 0 }}>+91 9999999999</Paragraph>
          </Flex>
          <Flex align="center" gap={10}>
            <FontAwesomeIcon icon={faGoogle} size="lg" />
            <Paragraph style={{ color: "white", margin: 0 }}>aditi.kashyap@gmail.com</Paragraph>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default Footer1;
