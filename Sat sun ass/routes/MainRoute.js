import Navbar from "../component/Navbar";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

import React from 'react'

const MainRoute = {
    path: "/",
    element:<Navbar/>,
    children:[
        {
            path:"",
            element:<Products/>
        },{
            path:"/cart",
            element:<Cart/>
        }
    ]
}

export default MainRoute;