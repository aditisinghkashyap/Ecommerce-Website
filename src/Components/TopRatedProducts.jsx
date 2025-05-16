import React,{useContext} from 'react'
import { Typography,Button,Image,Flex} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const { Paragraph } = Typography;
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ModeContext } from '../App';
const TopRatedProducts = () => {
  const{mode,setMode}=useContext(ModeContext)

  return (
    <>
    <Flex vertical style={{alignItems:"center", justifyContent:"center" ,padding:"60px 10px" , backgroundColor: mode ? "#CCCAF0" : "#1E272e"}}>
    <Paragraph style={{color:'blue',margin:"0px"}}>Top Rated Products for you</Paragraph>
    <Paragraph style={{ fontSize: '28px',fontWeight:"700",margin:"0px",color:mode ? "black" :"white"  }}> Best Products</Paragraph>
    <Paragraph style={{textAlign:"center",color:mode ? "black" :"white" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit modi Sit modi</Paragraph>
    <Flex style={{marginTop:"35px",flexWrap:"wrap",gap:"19px",justifyContent:"space-around" ,width:"100%"}}>

       
       <Flex style={{height:"400px",alignItems:"flex-end"}} >
       <div style={{width:"300px",boxShadow:"1200px",backgroundColor:"white",
         display:"flex",flexDirection:"column",alignItems:"center",flexWrap:"wrap",
         borderRadius:"15px",padding:"20px"}}>
       <Image src="shirt.png" style={{width:"100%",height:"250px", objectFit:"contain",
        marginTop:"-100px"}}></Image>
        <Flex></Flex>
        <Flex>
          <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> 
        </Flex>
       <p style={{fontWeight:"700",fontSize:"19px",margin:"2px 0px"}}>Casual shirt</p>
       <p style={{color:"grey",marginTop:"0px",textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit  Sit </p>
        <Button style={{backgroundColor:"purple",width:"100px",color:"white",borderRadius:"40px",height:"40px"}}>Demo only</Button>
        </div></Flex>

        <Flex style={{height:"400px",alignItems:"flex-end"}} >
       <div style={{width:"300px",boxShadow:"1200px",backgroundColor:"white",
         display:"flex",flexDirection:"column",alignItems:"center",flexWrap:"wrap",
         borderRadius:"15px",padding:"20px"}}>
       <Image src="shirt2.png" style={{width:"100%",height:"250px", objectFit:"contain",
        marginTop:"-100px"}}></Image>
        <Flex>
          <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> 
        </Flex>
       <p style={{fontWeight:"700",fontSize:"19px",margin:"2px 0px"}}>Printed shirt</p>
       <p style={{color:"grey",marginTop:"0px",textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit  Sit </p>
        <Button style={{backgroundColor:"purple",width:"100px",color:"white",borderRadius:"40px",height:"40px"}}>Demo only</Button>
        </div></Flex>

        <Flex style={{height:"400px",alignItems:"flex-end"}} >
       <div style={{width:"300px",boxShadow:"1200px",backgroundColor:"white",
         display:"flex",flexDirection:"column",alignItems:"center",flexWrap:"wrap",
         borderRadius:"15px",padding:"20px"}}>
       <Image src="shirt3.png" style={{width:"100%",height:"250px", objectFit:"contain",
        marginTop:"-100px"}}></Image>
        <Flex>
          <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> 
        </Flex>
       <p style={{fontWeight:"700",fontSize:"19px",margin:"2px 0px"}}>Women shirt</p>
       <p style={{color:"grey",marginTop:"0px",textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit  Sit </p>
       <Button style={{backgroundColor:"purple",width:"100px",color:"white",borderRadius:"40px",height:"40px"}}>Demo only</Button>
        </div></Flex>

        <Flex style={{height:"400px",alignItems:"flex-end"}} >
       <div style={{width:"300px",boxShadow:"1200px",backgroundColor:"white",
         display:"flex",flexDirection:"column",alignItems:"center",flexWrap:"wrap",
         borderRadius:"15px",padding:"20px"}}>
       <Image src="shirt.png" style={{width:"100%",height:"250px", objectFit:"contain",
        marginTop:"-100px"}}></Image>
        <Flex>
          <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> <FontAwesomeIcon icon={faStar} style={{color:"#EDC001"}}/> 
        </Flex>
       <p style={{fontWeight:"700",fontSize:"19px",margin:"2px 0px 0px 0px"}}>Casual shirt</p>
       <p style={{color:"grey",textAlign:"center",marginTop:"0px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit  Sit </p>
        <Button style={{backgroundColor:"purple",width:"100px",color:"white",borderRadius:"40px",height:"40px"}}>Demo only</Button>
        </div></Flex>
     
     
    </Flex>
    </Flex>
    </>
  )
}

export default TopRatedProducts
