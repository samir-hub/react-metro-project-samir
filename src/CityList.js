import React, { useState, useEffect } from "react";

function CityList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.census.gov/data/2010/acs/acs1/profile?get=NAME,DP02_0001E&for=metropolitan%20statistical%20area/micropolitan%20statistical%20area:*"
    )
      .then(res => res.json())
      .then(res => console.log(res));
  }, []);

  //console.log(cities[1][0].split(" ")[2])
  let result = cities.filter(city => {
    return city[0].split(" ")[2] === "Metro";
  });

  console.log(cities);

  return (
    <div>
      <h1>U.S. Metropolitans</h1>
      <h3>Select a Metro</h3>
      {/* <ul>
        {result.map(city => {
          return <li>{city}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default CityList;
