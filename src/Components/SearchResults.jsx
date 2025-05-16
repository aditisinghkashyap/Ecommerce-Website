import React, { useContext } from 'react';
import { ModeContext } from '../App';
import { Card, Typography , Flex ,Button , Image } from 'antd';
import kidsData from '../../kidsData';
import menData from '../../menData';
import { HeartOutlined, HeartFilled, CheckOutlined } from '@ant-design/icons';
import womenData from '../../womenData';

const SearchResults = () => {
  const { inputSearch , setInputSearch , mode,
    kidsSelected,
    setKidsSelected,
    kidsListed,
    setKidsListed,
    menSelected,
    setMenSelected,
    selectedItems,
    setSelectedItems,
    menListed,
    setMenListed,
    wishlistedItems,
    setWishlistedItems
  } = useContext(ModeContext) ;
  const kidsSearch = kidsData.filter(( item) => item.Colour.toLowerCase().includes( inputSearch.trim().toLowerCase())) ;
    const menSearch = menData.filter(( item) => item.Colour.toLowerCase().includes( inputSearch.trim().toLowerCase())) ;
        const womenSearch = womenData.filter(( item) => item.Colour.toLowerCase().includes( inputSearch.trim().toLowerCase())) ;
        console.log( kidsSearch ) ;
    const handleAddKidsItems = (item) => {
    const alreadyInCart = selectedItems.find((cartItem) => cartItem.id === item.id);
    if (!alreadyInCart) {
      setSelectedItems((prev) => [...prev, { ...item, qty: 1 }]);
      setKidsSelected((prev) => [...prev, item]);
    }
  };

  const handleToggleWishlist = (item) => {
    const alreadyInWishlist = kidsListed.find((kidl) => kidl.id === item.id);

    if (alreadyInWishlist) {
      setWishlistedItems((prev) => prev.filter((i) => i.id !== item.id));
      setKidsListed((prev) => prev.filter((i) => i.id !== item.id));
    } else {
      setWishlistedItems((prev) => [...prev, item]);
      setKidsListed((prev) => [...prev, item]);
    }
  };
  
  const handleAddMenItems = (item) => {
    const alreadyInCart = selectedItems.find((i) => i.id === item.id);
    if (!alreadyInCart) {
      setSelectedItems((prev) => [...prev, { ...item, qty: 1 }]);
      setMenSelected((prev) => [...prev, item]);
    }
  };

  const handleToggleMenWishlist = (item) => {
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
    <>
    { kidsSearch.length > 0 &&
     <div>  
      <div style={{ fontWeight : 700 , marginTop : 30}}>Kid's Products</div>
           <Flex style={{  marginTop: "15px",
        flexWrap: "wrap",
        gap: "19px",
        justifyContent: "space-around",
        width: "100%"}}>
             {kidsSearch.map(( item , index ) => 
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
                    kidsListed.find((kidl) => kidl.id === item.id)
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
                      backgroundColor: kidsSelected.find((kid) => kid.id === item.id) ? 'white' : "purple",
                      color: kidsSelected.find((kid) => kid.id === item.id) ? 'green' : "white",
                      borderRadius: "40px",
                      height: "40px",
                      fontWeight: 700,
                      border: kidsSelected.find((kid) => kid.id === item.id)
                        ? '1px solid green'
                        : '1px solid'
                    }}
                    onClick={() => handleAddKidsItems(item)}
                  >
                    {
                      kidsSelected.find((kid) => kid.id === item.id)
                        ? <><CheckOutlined /> Added Successfully</>
                        : 'Add to Cart'
                    }
                  </Button>
                </div>
              </Flex>
             )}
             </Flex>
             </div>
            
    }
    { menSearch.length > 0 && <div>  
      <div style={{ fontWeight : 700 , marginTop : 30}}>Men's Products</div>
           <Flex style={{  marginTop: "15px",
        flexWrap: "wrap",
        gap: "19px",
        justifyContent: "space-around",
        width: "100%"}}>
             {menSearch.map(( item , index ) => 
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
                    menListed.find((kidl) => kidl.id === item.id)
                      ? <HeartFilled
                          style={{ fontSize: '25px', color: 'red' }}
                          onClick={() => handleToggleMenWishlist(item)}
                        />
                      : <HeartOutlined
                          style={{ fontSize: '25px', color: 'red' }}
                          onClick={() => handleToggleMenWishlist(item)}
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
                      backgroundColor: menSelected.find((kid) => kid.id === item.id) ? 'white' : "purple",
                      color: menSelected.find((kid) => kid.id === item.id) ? 'green' : "white",
                      borderRadius: "40px",
                      height: "40px",
                      fontWeight: 700,
                      border: menSelected.find((kid) => kid.id === item.id)
                        ? '1px solid green'
                        : '1px solid'
                    }}
                    onClick={() => handleAddMenItems(item)}
                  >
                    {
                      menSelected.find((kid) => kid.id === item.id)
                        ? <><CheckOutlined /> Added Successfully</>
                        : 'Add to Cart'
                    }
                  </Button>
                </div>
              </Flex>
             )}
             </Flex>
             </div>
     }
     { kidsSearch.length === 0 && menSearch.length === 0 && <div style={{ fontWeight :700 , fontSize : 30 , display : 'flex' , justifyContent : 'center' , alignItems : 'center' , height: '80vh' , background : mode ? '#CCCAF0' : '#1e1e2f' , color : mode ? 'black' : 'white'}}>No Items Found</div>} 
    </>
  );
};

export default SearchResults;
