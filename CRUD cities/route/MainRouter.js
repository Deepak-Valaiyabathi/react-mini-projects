import App from "../../App";
import CityList from "../CityList";
import AddCity from "../pages/AddCity"
import ViewCity from "../pages/ViewCity";

const MainRoutes = {
    path: "/",
    element: <App />,
    children: [
     
      {
        path: "/list",
        element: <CityList />,
      },
      {
        path: "/add",
        element: <AddCity />,
      },
      {
       path:"/list/view/:id",
       element:<ViewCity />,
      },
    ],
  };
  
  export default MainRoutes;