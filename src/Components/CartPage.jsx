import React, { useContext } from 'react';
import { ModeContext } from "../App";
import { Button, Flex, Tooltip } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faBox, faMoneyCheckAlt, faBan } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const {
    selectedItems,
    setSelectedItems,
    setMenSelected,
    setKidsSelected,
    setWomenSelected
  } = useContext(ModeContext);

  const navigation = useNavigate();

  const handleRemove = (id) => {
    setSelectedItems((prev) => prev.filter(item => item.id !== id));
    setMenSelected((prev) => prev.filter(item => item.id !== id));
    setWomenSelected((prev) => prev.filter(item => item.id !== id));
    setKidsSelected((prev) => prev.filter(item => item.id !== id));
  };

  const totalPrice = selectedItems.reduce((acc, curr) => acc + Number(curr.price), 0);
  const isCartEmpty = selectedItems.length === 0;

  return (
    <div>
      <h2 style={{ margin: "20px" }}>1. REVIEW YOUR PRODUCTS ({selectedItems.length} Items)</h2>
      <Flex vertical>
        {selectedItems.map((item) => (
          <Flex key={item.id} style={{ marginBottom: "20px" }}>
            <div
              style={{
                background: `url(${item.img})`,
                width: 250,
                height: 170,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                marginRight: "20px"
              }}
            />

            <Flex vertical style={{ justifyContent: "center", flex: 1, padding: "20px" }}>
              <Flex style={{ alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <p style={{ fontWeight: "700", fontSize: "17px", margin: 0 }}>
                  {item.productName}
                </p>
                <p style={{ color: "grey", fontWeight: "700", fontSize: "15px", margin: 0 }}>
                  $ {item.price}
                </p>
              </Flex>
              <p style={{ color: "grey", margin: "5px 0" }}>Finish: {item.finish}</p>
              <p style={{ color: "grey", margin: "5px 0" }}>Colour: {item.Colour}</p>
              <p style={{ color: "grey", margin: "5px 0" }}>Quantity: {item.qty}</p>
              <Button
                style={{ backgroundColor: "pink", width: "fit-content", marginTop: "10px" }}
                onClick={() => handleRemove(item.id)}
              >
                Remove from cart
              </Button>
            </Flex>
          </Flex>
        ))}

        <Flex
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            background: "#f9f9f9",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            marginTop: "30px",
            width: "100%",
            padding: "20px"
          }}
        >
          <p style={{ fontWeight: "700", fontSize: "17px", margin: 0 }}>Total Price</p>
          <p style={{ fontWeight: "700", fontSize: "15px", margin: 0 }}>
            $ {totalPrice}
          </p>
        </Flex>

        <Flex
          style={{
            width: "100%",
            height: "70px",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          {isCartEmpty ? (
            <Tooltip title="Add items to proceed">
              <Button
                style={{
                  backgroundColor: "grey",
                  cursor: "not-allowed",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
                disabled
              >
                <FontAwesomeIcon icon={faBan} />
                Can't Proceed
              </Button>
            </Tooltip>
          ) : (
            <Button style={{ backgroundColor: "purple", color: "white" }} onClick={() => navigation("/Checkout")}>
              Next
            </Button>
          )}
        </Flex>

        <Flex
          style={{
            width: "100%",
            height: "70px",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            alignItems: "center",
            gap: "40px",
            marginTop: "10px",
            marginBottom: "10px",
            paddingTop: "50px",
            paddingBottom: "40px"
          }}
        >
          <Flex vertical>
            <FontAwesomeIcon icon={faMedal} style={{ color: "grey", fontSize: "30px" }} />
            <p>Genuine Product</p>
          </Flex>
          <Flex vertical>
            <FontAwesomeIcon icon={faBox} style={{ color: "grey", fontSize: "30px" }} />
            <p>Contactless Delivery</p>
          </Flex>
          <Flex vertical>
            <FontAwesomeIcon icon={faMoneyCheckAlt} style={{ color: "grey", fontSize: "30px" }} />
            <p>Secure Payments</p>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default CartPage;
