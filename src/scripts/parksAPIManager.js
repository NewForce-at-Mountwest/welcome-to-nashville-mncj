// target the park search button, add a click event 

document.querySelector("#parkSearchBtn").addEventListener("click", () => {
    
// create variable parkSearch and assign its value to that of the parkSearchBar. Add functions editing the search values to  replace capitalization and empty space with usable key values. fetch the data 

    let parkSearch = document.querySelector("#parkSearchBar").value.replace(" ", "_").toLowerCase()

    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkSearch}=Yes`, {
        "$$app_token": "UV5P5RY4tBY3gDjgiEoopKmGb"
    })

//  parse the data from the api and console log it

        .then(parks => parks.json())
        .then(parsedParks => {
        
// return the first 4 results, grab park name and address and console log it

        for (i=0; i<4; i++){
        let parkName = parsedParks[i].park_name
        let parkAddress = parsedParks[i].mapped_location_address
        
// target div container and throw info into index

        document.querySelector("#searchResults").innerHTML += `
        <div>
        <h4>${parkName}</h4><p>${parkAddress}</p>
        </div>
        `

        // document.querySelector("#searchResults").innerHTML = parkHTML
        console.log(parkName)
        console.log(parkAddress)
        }})
    })
