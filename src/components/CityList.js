import React, { useState, useEffect } from "react";
import './CityList.css'

function CityList() {
  const [cities, setCities] = useState([]);
  const [displayCity, setDisplayCity] = useState("");


  useEffect(() => {
    fetch(
      "https://api.census.gov/data/2010/acs/acs1/profile?get=NAME,DP02_0001E&for=metropolitan%20statistical%20area/micropolitan%20statistical%20area:*"
    )
      .then(res => res.json())
      .then(res => setCities(res));
  }, []);

  const handleClick = (city) => {
    setDisplayCity(city[0] + " " + city[1])
  }

  let result = cities.filter(city => {
    return city[0].split(" ")[2] === "Metro";
  });

  let scrubbedData = result.map(city => {
    return city[0].split(" ");
  });

  //console.log(scrubbedData);

  return (
    <div>
      <h1>U.S. Metropolitans</h1>
      {!displayCity && <h3>Select a Metro</h3>}
      {displayCity && <h3>You have selected {displayCity}</h3>}
      <div className="citylist-div">
        {scrubbedData.map(city => {
          return <p onClick={() => handleClick(city)}>{city[0]} {city[1]}</p>;
        })}
      </div>
    </div>
  );
}

export default CityList;
