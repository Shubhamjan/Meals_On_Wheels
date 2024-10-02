import React from "react"
import "./index.css";
const Footer=()=>{
const current= new Date;
const year= `${current.getFullYear()}`;
  return(
    <div className="footer"> 
    <h4 style={{backgroundColor:'tomato', marginBottom:'20px', position:'absolute'}}></h4>
    </div>
)
}
export default Footer;