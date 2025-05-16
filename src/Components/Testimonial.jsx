import React,{useContext} from 'react'
import { Typography,Button,Image,Flex} from 'antd';
import { ModeContext } from '../App';
const { Paragraph } = Typography;
const Testimonial = () => {
 
   const{mode,setMode}=useContext(ModeContext);
  return (
    <>
    <Flex vertical style={{alignItems:"center", justifyContent:"center" ,padding:"60px 10px" ,backgroundColor: mode ? "white" : "#1e1e2f"}}>
    <Paragraph style={{color:'blue',margin:"0px"}}>What our customers are saying</Paragraph>
    <Paragraph style={{ fontSize: '28px',fontWeight:"700",margin:"0px",color:mode ? "black" :"white"  }}>Testimonials</Paragraph>
    <Paragraph style={{textAlign:"center",color:mode ? "black" :"white" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</Paragraph>
    
    
    <Flex style={{marginTop:"35px",flexWrap:"wrap",gap:"20px",justifyContent:"space-around" ,width:"100%"}}>
      <div style={{width:"400px",backgroundColor:"#C3CDE6",padding:"30px",borderRadius:"12px"}}>
      <Image src="women.png" style={{width:"100px",height:"100px",borderRadius:"50%",backgroundColor:"grey", objectFit:"cover"}}></Image>
      <p style={{color:"grey",marginBottom:"5px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi Lorem ipsum dolor.</p>
      <p style={{fontWeight:"600",fontSize:"17px",margin:"5px 0"}}>Aditi Kashyap</p>
      </div>
     
    </Flex>
    </Flex>
    </>
  )
}

export default Testimonial
