import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CityContext } from "../context/CityProvider";
import { useNavigate } from "react-router-dom";

const ViewCity = () => {
  const { id } = useParams();
  const { cityList, setCityList } = useContext(CityContext);
  const navigate = useNavigate();
//   const [selectCity, setSelectCity] = useState(
//     cityList.find((city) => city.id === Number(id))
//   );
  const [data, setData] = useState({
    city: "",
    state: "",
  });
  const handle = (ev) => {
    ev.preventDefault();
    const updatedCityList = cityList.map(value =>
        value.id === Number(id) ? { ...value, name: data.city, state: data.state } : value
      );
      setCityList(updatedCityList)
    navigate("/list");
  };
  const change = (e) => {
    setData((prev) => {
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

export default ViewCity;
