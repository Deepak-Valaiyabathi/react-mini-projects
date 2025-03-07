import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name:"",
    password:"",
    city:"",
    food:"",
  })
  const [check, setCheck] = useState(false);
  const dataHandling = (event)=>{
    event.preventDefault();
      console.log(data);
      setCheck(true)
  }
  return (
    <div
      style={{
        boxSizing: "border-box",
        padding: "20px",
        placeItems: "center",
        height: "600px",
      }}
    >
      <h1>problem 5</h1>
      <form style={{border:"2px solid black",height:"400px", width:"350px",borderRadius:"10px", padding:"10px",placeItems:"center"}}>
        <h1>Form</h1>
        <input type="text" placeholder="Enter name" name="username" onChange={(e)=>{
           setData((pre)=>{
            return{
              ...pre,name:e.target.value
            }
           })
        }} style={{marginBottom:"10px", width:"300px",height:"30px"}} />
        <br></br>
        <input type="number" placeholder="Enter password" name="password" onChange={(e)=>{
           setData((pre)=>{
            return{
              ...pre,password:e.target.value
            }
           })
        }} style={{marginBottom:"10px", width:"300px",height:"30px"}} />
        <br></br>
        <input type="text" placeholder="Enter city" name="city" onChange={(e)=>{
           setData((pre)=>{
            return{
              ...pre,city:e.target.value
            }
           })
        }} style={{marginBottom:"10px", width:"300px",height:"30px"}} />
        <br></br>
        <label htmlFor="foods">Choose a food:</label>

        <select name="foods" onChange={(e)=>{
           setData((pre)=>{
            return{
              ...pre,food:e.target.value
            }
           })
        }} >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select><br></br>
        <button onClick={dataHandling} type="submit" style={{marginTop:"50px", width:"100px",height:"30px"}} >Submit</button>
      </form>
      <div>
        {check && <div>
          <h1>{data.name}</h1>
          <h1>{data.password}</h1>
          <h1>{data.city}</h1>
          <h1>{data.food}</h1>
          </div>}
      </div>
    </div>
  );
};

export default Contact;
