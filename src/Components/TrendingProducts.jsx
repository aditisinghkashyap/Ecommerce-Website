import React,{useContext} from 'react'
import { Typography,Button,Image,Flex} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const { Paragraph } = Typography;
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ModeContext } from '../App';
const TrendingProducts = () => {

    const{mode,setMode}=useContext(ModeContext);
  return (
    <>
    <Flex vertical style={{alignItems:"center", justifyContent:"center" ,padding:"60px 10px" , backgroundColor: mode ? "white" : "#585d78"}}>
    <Paragraph style={{color:'blue',margin:"0px"}}>Top Selling Products for you</Paragraph>
    <Paragraph style={{ fontSize: '28px',fontWeight:"700",margin:"0px",color:mode ? "black" :"white"  }}>Products</Paragraph>
    <Paragraph style={{textAlign:"center",color:mode ? "black" :"white" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</Paragraph>
    
    <Flex style={{marginTop:"35px",flexWrap:"wrap",gap:"20px",justifyContent:"space-around" ,width:"100%"}}>
      <div style={{width:"150px"}}>
       <div style={{width:"150px"}}><Image src="women.png" style={{width:"100%",height:"250px", objectFit:"cover",borderRadius:"10px"}}></Image></div>
      <p style={{fontWeight:"600",fontSize:"17px",marginBottom:"5px",color:mode ? "black" :"white" }}>Women Ethnic</p>
      <p style={{color:"grey",margin:"5px 0"}}>White</p>
      <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/><span> 5</span>
      </div>
       <div style={{width:"150px"}}>
       <div style={{width:"150px"}}><Image src="women4.jpg" style={{width:"100%",height:"250px", objectFit:"cover",borderRadius:"10px"}}></Image></div>
       <p style={{fontWeight:"600",fontSize:"17px",marginBottom:"5px",color:mode ? "black" :"white" }}>Fashion T-shirt</p>
       <p style={{color:"grey",margin:"5px 0"}}>White</p>
      <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/><span> 4.5</span>
      </div>
      <div style={{width:"150px"}}>
       <div style={{width:"150px"}}><Image src="women2.jpg" style={{width:"100%",height:"250px", objectFit:"cover",borderRadius:"10px"}}></Image></div>
       <p style={{fontWeight:"600",fontSize:"17px",marginBottom:"5px",color:mode ? "black" :"white" }}>Women Western</p>
       <p style={{color:"grey",margin:"5px 0"}}>White</p>
      <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/><span> 4.2</span>
      </div>
      <div style={{width:"150px"}}>
       <div style={{width:"150px"}}> <Image src="women3.jpg" style={{width:"100%",height:"250px", objectFit:"cover",borderRadius:"10px"}}></Image></div>
       <p style={{fontWeight:"600",fontSize:"17px",marginBottom:"5px",color:mode ? "black" :"white" }}>Women Goggles</p>
       <p style={{color:"grey",margin:"5px 0"}}>White</p>
      <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/><span> 4.1</span>
      </div>
       <div style={{width:"150px"}}>
       <div style={{width:"150px"}}><Image src="women4.jpg" style={{width:"100%",height:"250px", objectFit:"cover",borderRadius:"10px"}}></Image></div>
       <p style={{fontWeight:"600",fontSize:"17px",marginBottom:"5px",color:mode ? "black" :"white" }}>Women T-shirt</p>
       <p style={{color:"grey",margin:"5px 0"}}>White</p>
      <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/><span> 4.0</span>
      </div>
       <div style={{width:"150px"}}>
       <div style={{width:"150px"}}><Image src="women4.jpg" style={{width:"100%",height:"250px", objectFit:"cover",borderRadius:"10px"}}></Image></div>
       <p style={{fontWeight:"600",fontSize:"17px",marginBottom:"5px",color:mode ? "black" :"white" }}>Women T-shirt</p>
       <p style={{color:"grey",margin:"5px 0"}}>White</p>
      <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/><span> 4.6</span>
      </div>
    </Flex>
    </Flex>
    </>
  )
}

export default TrendingProducts
