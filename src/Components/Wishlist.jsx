import React, { useContext } from 'react';
import { Typography, Button, Image, Flex } from 'antd';
import { ModeContext } from '../App';

const { Paragraph } = Typography;

const Wishlist = () => {
  const {
    mode,
    wishlistedItems,
    setWishlistedItems,
    setMenListed,
    setWomenListed,
    setKidsListed
  } = useContext(ModeContext);

  return (
    <Flex
      vertical
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 10px',
        backgroundColor: mode ? 'white' : '#1e1e2f'
      }}
    >
      <Paragraph style={{ color: 'blue', margin: '0px' }}>
        Wishlisted Products for you
      </Paragraph>
      <Paragraph
        style={{
          fontSize: '28px',
          fontWeight: '700',
          margin: '0px',
          color: mode ? 'grey' : 'white'
        }}
      >
        Wishlisted Outfits
      </Paragraph>
      <p style={{color:"black" ,fontSize:"20px",fontWeight:500}}>{wishlistedItems.length} Wishlisted Items</p>
     

      <Flex
        style={{
          marginTop: '25px',
          flexWrap: 'wrap',
          gap: '19px',
          justifyContent: 'space-around',
          width: '100%'
        }}
      >

        {wishlistedItems.map((item, index) => (
          <Flex
            key={item.id}
            style={{ height: '300px', alignItems: 'flex-end' }}
          >
            <div
              style={{
                width: '300px',
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '15px',
                padding: '20px'
              }}
            >
              <Image
                src={item.img}
                style={{
                  width: '100%',
                  height: '170px',
                  objectFit: 'contain',
                  borderRadius: '17px',
                  marginTop: '-100px'
                }}
              />

              <Button
                style={{ backgroundColor: 'pink', marginTop: '10px' }}
                onClick={() => {
                  // Update state to remove item from wishlist
                  setWishlistedItems(prev =>
                    prev.filter(val => val.id !== item.id)
                  );
                  // Also update listed state for men/women/kids
                  setMenListed(prev =>
                    prev.filter(men => men.id !== item.id)
                  );
                  setWomenListed(prev =>
                    prev.filter(women => women.id !== item.id)
                  );
                  setKidsListed(prev =>
                    prev.filter(kids => kids.id !== item.id)
                  );
                }}
              >
                Remove from Wishlist
              </Button>

              <p
                style={{
                  fontWeight: '400',
                  fontSize: '19px',
                  margin: '2px 0px',
                  color: 'blue'
                }}
              >
                ${item.price}
              </p>
              <p
                style={{
                  fontWeight: '700',
                  fontSize: '19px',
                  margin: '2px 0px'
                }}
              >
                {item.Colour} Jacket
              </p>
              <p
                style={{
                  color: 'grey',
                  marginTop: '0px',
                  textAlign: 'center'
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit Sit
              </p>
            </div>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Wishlist;
