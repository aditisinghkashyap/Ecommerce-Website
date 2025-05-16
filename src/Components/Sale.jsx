import React, { useContext } from "react";
import { Image, Typography, Flex, Input, Row, Col } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMedal, faTruck, faMoneyCheckDollar, faEnvelopeOpenText
} from '@fortawesome/free-solid-svg-icons';
import { ModeContext } from '../App';

const { Title, Paragraph } = Typography;

const Sale = () => {
  const { mode } = useContext(ModeContext);

  const iconStyle = {
    width: "47px",
    height: "47px",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  };

  const paragraphStyle = {
    marginBottom: "0",
    fontSize: "16px",
    fontWeight: "400",
    color: mode ? "black" : "white"
  };

  return (
    <Flex vertical style={{ backgroundColor: mode ? "white" : "#1e1e2f" }}>
      <Row justify="center" style={{ padding: "40px 0" }} gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <Image
            src="4547829.jpg"
            width="100%"
            style={{ maxWidth: "500px", margin: "0 auto", display: "block" }}
          />
        </Col>
        <Col xs={24} md={12}>
          <Flex vertical style={{ padding: "0 20px" }}>
            <Title style={{ fontWeight: "700", color: mode ? "black" : "white" }}>
              Winter Sale up to 50% off
            </Title>
            <Paragraph style={{ color: "grey" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </Paragraph>

            <Flex vertical style={{ gap: "20px" }}>
              <Flex align="center" gap={18}>
                <div style={{ ...iconStyle, backgroundColor: "#FFD4B4" }}>
                  <FontAwesomeIcon icon={faMedal} size="2x" />
                </div>
                <Paragraph style={paragraphStyle}>Quality Products</Paragraph>
              </Flex>

              <Flex align="center" gap={18}>
                <div style={{ ...iconStyle, backgroundColor: "#CCCAF0" }}>
                  <FontAwesomeIcon icon={faTruck} size="2x" />
                </div>
                <Paragraph style={paragraphStyle}>Fast Delivery</Paragraph>
              </Flex>

              <Flex align="center" gap={18}>
                <div style={{ ...iconStyle, backgroundColor: "#CFDFEF" }}>
                  <FontAwesomeIcon icon={faMoneyCheckDollar} size="2x" />
                </div>
                <Paragraph style={paragraphStyle}>Easy Payment Method</Paragraph>
              </Flex>

              <Flex align="center" gap={18}>
                <div style={{ ...iconStyle, backgroundColor: "#F7CEE2" }}>
                  <FontAwesomeIcon icon={faEnvelopeOpenText} size="2x" />
                </div>
                <Paragraph style={paragraphStyle}>Get Offers</Paragraph>
              </Flex>
            </Flex>
          </Flex>
        </Col>
      </Row>

      {/* Newsletter */}
      <Flex vertical style={{
        backgroundColor: "#585d78",
        alignItems: "center",
        padding: "40px 20px",
        textAlign: "center"
      }}>
        <Title level={2} style={{ color: "white", marginBottom: 0 }}>Get Notified About New</Title>
        <Title level={2} style={{ color: "white", marginTop: 0 }}>Products</Title>
        <Input
          style={{
            width: "100%",
            maxWidth: "550px",
            height: "55px",
            fontSize: "17px",
            fontWeight: "600",
            marginTop: "20px"
          }}
          placeholder="Enter your email"
        />
      </Flex>
    </Flex>
  );
};

export default Sale;
