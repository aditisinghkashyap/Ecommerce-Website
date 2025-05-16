import React, { createContext,useState,useRef, useEffect} from 'react'
import NavBar from './Components/NavBar'
import { Layout } from 'antd'
import{Routes,Route, useNavigate} from "react-router-dom"
import Home from './Components/Home';
import Footer1 from './Components/Footer1';
import KidsWear from './Components/KidsWear';
import MenWear from './Components/MenWear';
import WomenWear from './Components/WomenWear';
import TopRatedProducts from './Components/TopRatedProducts';
import TrendingProducts from './Components/TrendingProducts';
import CheckoutPage from './Components/CheckoutPage';
import womenData from '../womenData';
import menData from '../menData';
import kidsData from '../kidsData';
import CartPage from './Components/CartPage';
import Wishlist from './Components/Wishlist';
import SearchResults from './Components/SearchResults';

const { Header, Footer, Content } = Layout;

const headerStyle = {
  color:"purple",
  height: "auto",
  padding:"0"
};


export const ModeContext=createContext();
const App = () => {

const[mode,setMode]=useState(true);
const [ inputSearch , setInputSearch ] = useState('') ;
const [selectedItems,setSelectedItems] = useState([]) ;
const [wishlistedItems, setWishlistedItems] = useState([]);
const [ womenSelected , setWomenSelected ] = useState([] ) ;
const [ womenListed , setWomenListed ] = useState([] ) ;
const [ menSelected , setMenSelected ] = useState([]) ;
const [ menListed, setMenListed ] = useState([] ) ;
const [ kidsSelected , setKidsSelected ] = useState([] ) ;
const [ kidsListed , setKidsListed ] = useState([] ) ;
const nav = useNavigate() ;
useEffect(() => { 
  if( inputSearch.trim().length > 0 ) {
    nav('/search') ;
  }
  else{
     nav('/') ;
  }
} , [inputSearch ])
  return (
    <ModeContext.Provider value={{mode,setMode ,inputSearch, setInputSearch, womenSelected ,setSelectedItems,setWishlistedItems, setWomenSelected ,kidsListed ,menListed, setMenListed, womenListed , setWomenListed, setKidsListed, selectedItems,menSelected,setMenSelected,kidsSelected,setKidsSelected,wishlistedItems}}>
    <Layout>
      <Header style={headerStyle}>
        <NavBar inputSearch = {inputSearch} setInputSearch = {setInputSearch} />
      </Header>
      <Content>
    
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/kids-wear" element={<KidsWear/>}/>
       <Route path="/men-wear" element={<MenWear/>}/>
        <Route path="/women-wear" element={<WomenWear/>}/>
         <Route path="/Top-rated-Products" element={<TopRatedProducts/>}/>
          <Route path="/Trending-Products" element={<TrendingProducts/>}/>
          <Route path="/Cart" element={<CartPage/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/Checkout" element={<CheckoutPage/>}/>
          <Route  path='/search' element = {<SearchResults/>}/>

     </Routes>
    
      </Content>
      <Footer style={{ padding : 0 }}>
        <Footer1/>
      </Footer>
    </Layout>
    </ModeContext.Provider>
  )
}

export default App
