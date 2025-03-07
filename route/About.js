import React, { useState } from "react";

const About = () => {
  const [data, setData] = useState("");
  const [arr, setArr] = useState([]);
 

  const dataHandling = (event) => {
    event.preventDefault();
    const numValue = Number(data.trim()); 

    if (numValue > 0 && numValue < 51) {
      setArr([...arr, data]);
      setData("");
      
    }else{
      alert("Please enter 0 to 50 number")
    }
    
  };

  return (
    <div
      style={{ boxSizing: "border-box", padding: "20px", placeItems: "center" }}
    >
      <h1>problem 6</h1>
      <form style={{ width: "500px" }}>
        <input
          type="tel"
          placeholder="Enter a number"
          onChange={(e) => {
            setData(e.target.value);
          }}
          style={{
            width: "300px",
            height: "30px",
            marginRight: "10px",
            borderRadius: "10px",
            padding: "5px",
          }}
        />
        <button
          onClick={dataHandling}
          style={{
            height: "40px",
            width: "120px",
            backgroundColor: "rgb(103, 58, 183)",
            color: "white",
            border: "none",
          }}
        >
          ADD
        </button>
      </form>
      {
          arr.map((num, index) => (
            <h1>
              {num}
            </h1>
          ))
        }
        
    </div>
  );
};

export default About;
