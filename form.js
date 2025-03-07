import React from "react";
function Formdata({setpname,setdes,setcate,setbname,setrprice,setsprice}){
   
    return(
 <form>
            <label htmlFor="pname">Product Name</label><br></br>
            <input type="text" name="pname" placeholder="Lorem Ipsum"  onChange={(e) => {
          setpname(e.target.value);
        }}></input><br></br>
            <label htmlFor="des">Description</label><br></br>
            <textarea id="des" rows={55} cols={20} placeholder="Lorem Ipsum Description" onChange={(e) => {
          setdes(e.target.value);
        }} style={{height:"150px"}} ></textarea><br></br>
            <label htmlFor="cate">Category</label><br></br>
            <input type="text" name="cate" placeholder="Sneaker" onChange={(e) => {
          setcate(e.target.value);}}></input><br></br>
            <label htmlFor="cate">Brand Name</label><br></br>
            <input type="text" name="Bname" placeholder="Adidas" onChange={(e) => {
          setbname(e.target.value);}}></input><br></br>
            <div style={{display:"flex", justifyContent:"space-evenly", width:"150px"}}>
                <div style={{marginRight:"5px"}}>
                <label htmlFor="cate">Regular Price</label><br></br>
                <input type="number" name="rprice" placeholder="₹ 110.40" onChange={(e) => {
          setrprice(e.target.value);}}></input><br></br>
                </div>
                <div>
                <label htmlFor="cate">Sale Price</label><br></br>
                <input type="number" name="sprice" placeholder="₹ 450" onChange={(e) => {
          setsprice(e.target.value);}}></input><br></br>
                </div>
            </div>
            
        </form>
       
    );
}
export default Formdata;

