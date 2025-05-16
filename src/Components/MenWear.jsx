import React, { useContext } from 'react';
import { Typography, Button, Image, Flex } from 'antd';
import { ModeContext } from '../App';
const { Paragraph } = Typography;
import { HeartOutlined, HeartFilled, CheckOutlined } from '@ant-design/icons';
import menData from "../../menData.js";

const MenWear = () => {
  const {
    mode,
    menSelected,
    setMenSelected,
    selectedItems,
    setSelectedItems,
    menListed,
    setMenListed,
    wishlistedItems,
    setWishlistedItems
  } = useContext(ModeContext);

  const handleAddMenItems = (item) => {
    const alreadyInCart = selectedItems.find((i) => i.id === item.id);
    if (!alreadyInCart) {
      setSelectedItems((prev) => [...prev, { ...item, qty: 1 }]);
      setMenSelected((prev) => [...prev, item]);
    }
  };

  const handleToggleWishlist = (item) => {
    const alreadyInWishlist = menListed.find((m) => m.id === item.id);

    if (alreadyInWishlist) {
      setWishlistedItems((prev) => prev.filter((i) => i.id !== item.id));
      setMenListed((prev) => prev.filter((i) => i.id !== item.id));
    } else {
      setWishlistedItems((prev) => [...prev, item]);
      setMenListed((prev) => [...prev, item]);
    }
  };

  return (
    <Flex
      vertical
      style={{
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 10px",
        backgroundColor: mode ? "white" : "#1e1e2f"
      }}
    >
      <Paragraph style={{ color: 'blue', margin: "0px" }}>Men Products for you</Paragraph>
      <Paragraph style={{
        fontSize: '28px',
        fontWeight: "700",
        margin: "0px",
        color: mode ? "black" : "white"
      }}>
        Men Winter Outfits
      </Paragraph>
      <Paragraph style={{ textAlign: "center", color: mode ? "black" : "white" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit modi Sit modi
      </Paragraph>

      <Flex style={{
        marginTop: "15px",
        flexWrap: "wrap",
        gap: "19px",
        justifyContent: "space-around",
        width: "100%"
      }}>
        {menData.map((item) => (
          <Flex key={item.id} style={{ height: "400px", alignItems: "flex-end" }}>
            <div style={{
              width: "300px",
              boxShadow: "1200px",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexWrap: "wrap",
              borderRadius: "15px",
              padding: "20px"
            }}>
              <Image
                src={item.img}
                style={{
                  width: "100%",
                  height: "170px",
                  objectFit: "contain",
                  borderRadius: "17px",
                  marginTop: "-100px"
                }}
              />

              {
                menListed.find((m) => m.id === item.id)
                  ? <HeartFilled
                      style={{ fontSize: '25px', color: 'red' }}
                      onClick={() => handleToggleWishlist(item)}
                    />
                  : <HeartOutlined
                      style={{ fontSize: '25px', color: 'red' }}
                      onClick={() => handleToggleWishlist(item)}
                    />
              }

              <p style={{ fontWeight: "400", fontSize: "19px", margin: "2px 0px", color: "blue" }}>
                ${item.price}
              </p>
              <p style={{ fontWeight: "700", fontSize: "19px", margin: "2px 0px" }}>
                {item.Colour} Jacket
              </p>
              <p style={{ color: "grey", marginTop: "0px", textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit Sit
              </p>

              <Button
                style={{
                  backgroundColor: menSelected.find((m) => m.id === item.id) ? 'white' : "purple",
                  color: menSelected.find((m) => m.id === item.id) ? 'green' : "white",
                  borderRadius: "40px",
                  height: "40px",
                  fontWeight: 700,
                  border: menSelected.find((m) => m.id === item.id)
                    ? '1px solid green'
                    : '1px solid'
                }}
                onClick={() => handleAddMenItems(item)}
              >
                {
                  menSelected.find((m) => m.id === item.id)
                    ? <><CheckOutlined /> Added Successfully</>
                    : 'Add to Cart'
                }
              </Button>
            </div>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default MenWear;
