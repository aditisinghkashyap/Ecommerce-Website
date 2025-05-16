import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShopify } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCartOutlined, HeartFilled } from '@ant-design/icons';
import { Typography, Input, Button, Image, Flex, Menu, Badge } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ModeContext } from '../App';
import allProducts from '../../allProducts';

const NavBar = ({ inputSearch , setInputSearch }) => {
  const { Title } = Typography;
  const { Search } = Input;
  const { mode, setMode, selectedItems, wishlistedItems, setSearchResults } = useContext(ModeContext);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 400);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navList = [
    { label: "Home", path: "" },
    { label: "Kid's Wear", path: "kids-wear" },
    { label: "Men's Wear", path: "men-wear" },
    { label: "Women's Wear", path: "women-wear" },
    { label: "Trending Products", path: "Trending-products" },
    { label: "Top-Rated Products", path: "Top-rated-products" }
  ];

  const items = navList.map((item) => ({
    key: item.path,
    label: item.label,
  }));

  const navigation = useNavigate();


  return (
    <>
      {/* Top Header Section */}
      <Flex
        wrap="wrap"
        justify="space-between"
        align="center"
        style={{
          padding: '10px 20px',
          backgroundColor: mode ? '#CCCAF0' : '#1e1e2f',
          rowGap: '10px'
        }}
      >
        {/* Left: Logo & Title */}
        <Flex align="center" style={{ gap: '10px' }}>
          <FontAwesomeIcon icon={faShopify} size="2x" />
          <Title level={3} style={{ margin: 0, fontFamily: "serif", color: "purple" }}>
            ShopSphere
          </Title>
        </Flex>

        {/* Right: Search + Icons */}
        <Flex align="center" wrap="wrap" style={{ gap: '10px' }}>
          <Search
            placeholder="Search for products"
            allowClear
            value={inputSearch}
            onChange={( e ) => setInputSearch( e.target.value)}
            enterButton={
              <Button
                style={{
                  backgroundColor: '#722ed1',
                  borderColor: '#722ed1',
                  color: 'white',
                  height: '31px'
                }}
                icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
              />
            }
            style={{
              maxWidth: 180,
              height: '30px'
            }}
          />
          {mode
            ? <Image src="light-mode-button.png" width={60} preview={false} onClick={() => setMode(false)} />
            : <Image src="dark-mode-button.png" width={60} preview={false} onClick={() => setMode(true)} />}
          <Badge count={wishlistedItems.length} showZero>
            <HeartFilled style={{ fontSize: '24px', color: 'purple' }} onClick={() => navigation("/wishlist")} />
          </Badge>
          <Badge count={selectedItems.length} showZero>
            <ShoppingCartOutlined style={{ fontSize: '26px', color: 'purple' }} onClick={() => navigation('/Cart')} />
          </Badge>
        </Flex>
      </Flex>

      {/* Bottom Menu Section */}
      <Flex
        justify="center"
        align="center"
        style={{
          backgroundColor: 'white',
        }}
      >
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{
            flexWrap: 'wrap',
            justifyContent: 'center',
            fontSize: isMobile ? '14px' : '16px',
            width: '100%',
            fontWeight: 600,
            border: 'none',
            textAlign: 'center'
          }}
          onClick={(e) => {
            navigation(`/${e.key}`);
          }}
        />
      </Flex>
    </>
  );
};

export default NavBar;
