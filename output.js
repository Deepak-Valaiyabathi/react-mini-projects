import React from "react";
function Output({pName,des,cate,bName,rPrice,sPrice}){

    return(
      <div id="outputBox">
        <h3>Product Name: {pName}</h3>
        <h3>Description: {des}</h3>
        <h3>Category: {cate}</h3>
        <h3>Brand Name: {bName}</h3>
        <h3>Regular Price: ₹ {rPrice}</h3>
        <h3>Sale Price: ₹  {sPrice}</h3>
      </div>
    );
  }
  export default Output;