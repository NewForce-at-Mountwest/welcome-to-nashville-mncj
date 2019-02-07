
// target the park search button, add a click event and a function editing the search values to  replace capitalization and empty space with usable key values.

document.querySelector("#parkSearchBtn").addEventListener("click", () => {
    
// create variable parkSearch and assign its value to that of the parkSearchBar. Add functions editing the search values to  replace capitalization and empty space with usable key values. fetch the data 

    let parkSearch = document.querySelector("#parkSearchBar").value.replace(" ", "_").toLowerCase()

    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkSearch}=Yes`, {
        "$$app_token": "UV5P5RY4tBY3gDjgiEoopKmGb"
    })
        //  parse the data from the api and console log it
        .then(parks => parks.json())
        .then(parsedParks => {

        for (i=0; i<4; i++){
        let parkNameParam = parsedParks[i].park_name
        let parkAddress = parsedParks[i].mapped_location_address
        console.log(parkNameParam)
        console.log(parkAddress)
        }})
    })

//    https://data.nashville.gov/resource/xbru-cfzi.json?park_name=
//    https://data.nashville.gov/resource/xbru-cfzi.json?mapped_location_address=2301 Metro Center Blvd

// for (i=0; i<4; i++){
//         let parkNameParam = parsedParks.parks[i].parkNameParam.park_name;
//         console.log(parkNameParam)



// // get all the park information as json
// const searchParks = parkNameParam => {
//     document.querySelector("#search-results").innerHTML = "";
//     fetch(
//         `https://data.nashville.gov/resource/xbru-cfzi.json`
    
// //     )
//       .then(parks => parks.json()) // convert them to a JS object
//       .then(parsedParks => {
//         // if whatever comes back has a .records property with stuff in it, then do all this stuff:
//         if (parsedParks.records.length > 0) {
//           // loop through the array of dino objects (parsedDino.records)
//           parsedParks.records.forEach(function(singlePark) {
//             // for each dino in the loop, fetch their image as a png
//             getInfoForPark(singlePark.park_name).then(response => {
//               // check and see if the response has any status code other than a 200 range (ok)
//               console.log("this is response", response)
//               if(!response.ok){
//                  throw response;
//               }
//               // we don't have to do .json() because it's coming back as a .png instead of json
//               printParkInfo(singlePark.park_name, response.url);

//             }).catch(error => {
//                 const imageUrl = "http://www.freakingnews.com/pictures/126000/George-Washington-Riding-a-Dinosaur--126354.jpg"
//                 printParkInfo(singlePark.park_name, imageUrl);

//             });
//           });
//         } else {
//           handleWeirdSearchInput(parsedParks.warnings[0]);
//         }
//       });
  