import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {

  return (
    <div>
       <div className="navbar">
     <nav>
      <li className="nav-btn">Home</li>
      <li className="nav-btn">Shop All</li>
      <li className="nav-btn">Blog</li>
     </nav>
     <div style={{display:"flex", placeItems:"center"}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeegfbUcC6LPyxJg0AIFSDOl4yrEJWDEnlaQ&s" alt="logo" width="50px" height="50px" />
      <h2>MDCOM</h2>
     </div>
     <div style={{display:"flex", justifyContent:"space-evenly",placeItems:"center", width:"350px"}}>
     <li className="nav-btn">About Us</li>
     <Link to={"/cart"}>cart</Link>
     <input type="text" placeholder="Search product"/>
     </div>
    </div>
    <Outlet/>
    </div>
   
  );
};

export default Navbar;
