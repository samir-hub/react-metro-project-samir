import React from "react";
import CityList from "./components/CityList";
import "./styles.css";

// The census.gov API below will return a JSON object of metropolitans
// and micropolitans with this shape:

// [["NAME","DP02_0001E","metropolitan statistical area/micropolitan statistical area"],
// ["Aberdeen, WA Micro Area","28376","10140"],
// ["Abilene, TX Metro Area","59857","10180"],
// ["Adrian, MI Micro Area","36341","10300"],
// ["Aguadilla-Isabela-San Sebasti?n, PR Metro Area",null,"10380"],
// ["Akron, OH Metro Area","281523","10420"],
// ["Albany, GA Metro Area","60263","10500"],
// ["Albany-Lebanon, OR Micro Area","45489","10540"],
// ["Albany-Schenectady-Troy, NY Metro Area","348634","10580"],
// ["Albertville, AL Micro Area","35024","10700"],
// ["Albuquerque, NM Metro Area","344800","10740"],
// ["Alexandria, LA Metro Area","54774","10780"],
// ["Allegan, MI Micro Area","41724","10880"],
// ["Allentown-Bethlehem-Easton, PA-NJ Metro Area","311470","10900"],
// ["Altoona, PA Metro Area","52111","11020"],
// ["Amarillo, TX Metro Area","94287","11100"],
// ["Ames, IA Metro Area","35851","11180"],
// ["Anchorage, AK Metro Area","135320","11260"],
// ["Anderson, IN Metro Area","50641","11300"],
//
// An example of the expected output is included as an animated GIF in this
// project (see animated-metro-selection.gif)//
// The URL in the built-in browser can also be opened externally, which will
// allow you to use your browser's Devtools.
//
// You can browse the API JSON data externally as well. We recommend Firefox for
// navigating the JSON data.
//
// Task 1: Use the fetch API to retrieve data from this API
//
// Task 2: Scrub the data so that we only display valid metropolitans.
//         A valid metropolitan has the label 'Metro Area' and has a
//         state (or two-state pair such as "PA-NJ")
//
// Task 3: Display the metro data in a list.
//         The list must be sorted by State first, then Metro name.
//
// Task 4: Display the metro selected when a metro is clicked from the list.
//
// Task 5: Style the UI as closely as possible to the animated GIF.

// st API =

//  ""ttps://api.census.gov/data/2010/acs/acs1/profile?get=NAME,DP02_0001E&for=metropolitan%20statistical%20area/micropolitan%20statistical%20area:*""

export default function App() {
  return (
    <div className="App">
      <CityList />
    </div>
  );
}
