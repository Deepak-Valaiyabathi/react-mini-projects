import React, { createContext, useState } from "react";
import cities from "../helper/cities.json";

export const CityContext = createContext(undefined);
const CityProvider = ({ children }) => {
  const [cityList, setCityList] = useState(cities);

  return (
    <CityContext.Provider
      value={{
        cityList,
        setCityList,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

export default CityProvider;
