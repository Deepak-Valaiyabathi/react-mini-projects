import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          height: "80px",
          width: "100",
          backgroundColor: "rgb(103, 58, 183)",
          color: "white",
          justifyContent: "space-evenly",
          placeItems: "center",
        }}
      >
        <h1 style={{ margin: "0px" }}>Router</h1>
        <nav>
          <ul
            style={{
              display: "flex",
              height: "20px",
              justifyContent: "space-evenly",
              width: "300px",
            }}
          >
            <Link to="" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
            <Link
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              problem 6
            </Link>
            <Link
              to="/contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              problem 5
            </Link>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Landing;
