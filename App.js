// import React, { useState } from "react";
import "./App.css";
import Landing from "./component/route/Landing";
// import Formdata from "./component/form";
// import Output from "./component/output";

function App() {
  // let [pName, setPName] = useState();
  // let [des, setDes] = useState();
  // let [cate, setCate] = useState();
  // let [bName, setBName] = useState();
  // let [rPrice, setRPrice] = useState();
  // let [sPrice, setSPrice] = useState();
  // const [isOutputContainerVisible, setIsOutputContainerVisible] =
  //   useState(false);
  // const handleClick = () => {
  //   if((pName?.length || 0) > 0 && (des?.length || 0) > 0 && (cate?.length || 0) > 0 && (bName?.length || 0) > 0 && (rPrice?.length || 0) > 0 && (sPrice?.length || 0) > 0 
  //   ){
  //     setIsOutputContainerVisible(true);
  //   }
  //   else{
  //     alert("fill the all data");
  //   }
  // };
  return (
    // <div style={{display:"flex"}}>
    //   <div style={{height:"700px", backgroundColor:"white", width: "450px", padding:"0px",margin:"50px"}}>
    //     <Formdata
    //       setpname={setPName}
    //       setdes={setDes}
    //       setcate={setCate}
    //       setbname={setBName}
    //       setrprice={setRPrice}
    //       setsprice={setSPrice}
    //     />
    //     <button id="sBtn" onClick={handleClick} style={{marginLeft:"50px"}}>
    //       Submit Order
    //     </button>
    //   </div>
    //   { isOutputContainerVisible && (
    //     <Output
    //       pName={pName}
    //       des={des}
    //       cate={cate}
    //       bName={bName}
    //       rPrice={rPrice}
    //       sPrice={sPrice}
    //     />
    //   )}
    // </div>
    <div>
      <Landing />
    </div>
  );
}

export default App;
