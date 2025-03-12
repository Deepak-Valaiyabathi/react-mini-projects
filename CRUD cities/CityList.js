
import React, { useContext } from "react";
import { CityContext } from "./context/CityProvider"

import { useNavigate } from "react-router-dom";

const CityList = () => {
  const { cityList, setCityList } = useContext(CityContext);
  
  const navigate = useNavigate();
 const handleDelete = (id)=>{
     setCityList(cityList.filter(data =>  data.id !== id))
 }

  return (
  
     <div style={{display:"flex"}}>
  <div style={{display:"flex", justifyContent:"space-around", border:"2px solid black", width:"1000px",height:"fit-content",flexWrap:"wrap"}}>
      {Object.entries(cityList).map(([index, value]) => (
        <div style={{backgroundColor:"rgb(229, 196, 141)", color:"black", width:"250px",height:"180px",margin:"30px", padding:"10px",boxSizing:"border-box"}}>
          <h2>{value.name}</h2>
          <h2>{value.state}</h2>
          <div style={{display:"flex", justifyContent:"space-evenly",gap:"20px"}}>
            <button onClick={()=>{
              navigate(`/list/view/${value.id}`)
            }}>Update</button>
            <button onClick={
            ()=>{
               handleDelete(value.id)
             }
            }>Delete</button>
          </div>
        </div>
      ))}
     
    </div>
    <button onClick={()=>{
        navigate("/add");
     }} style={{backgroundColor:"gray", color:"white", width:"150px",height:"100px",margin:"30px", border:"none", borderRadius:"15px",padding:"10px",boxSizing:"border-box"}}>
       ADD
     </button>
     </div>
  );
};

export default CityList;
