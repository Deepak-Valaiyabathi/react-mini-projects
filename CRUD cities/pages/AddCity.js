import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { CityContext } from "../context/CityProvider";

const AddCity = () => {
  const { setCityList, cityList } = useContext(CityContext);
  const navigate = useNavigate();
  const [data, setdata] = useState({
    city: "",
    state: "",
  });
  const handle = (ev) => {
    ev.preventDefault();

    setCityList((prev) => {
      return [
        ...prev,
        {
          id: prev.length + 1,
          name: data.city,
          state: data.state,
        },
      ];
    });
    navigate("/list");
  };
  const change = (e) => {
    setdata((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <div>
      <form>
        <div>
          <label htmlFor="city">City name: </label>
          <br />
          <input
            type="text"
            name="city"
            id="city"
            onChange={(e) => change(e)}
          />
        </div>
        <div>
          <label htmlFor="state">State name: </label>
          <br />
          <input
            type="text"
            name="state"
            id="state"
            onChange={(e) => change(e)}
          />
        </div>
        <button type="submit" onClick={handle}>
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddCity;
