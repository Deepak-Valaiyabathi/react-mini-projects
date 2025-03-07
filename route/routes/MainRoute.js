import Landing from "../Landing";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";





const MainRoutes = {
    path: "/",
    element: <Landing />,
    children: [
      // importing my About page
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      // Profile page

      {
        path: "/contact",
        element: <Contact />,
      },
     
    ],
  };
export default MainRoutes;