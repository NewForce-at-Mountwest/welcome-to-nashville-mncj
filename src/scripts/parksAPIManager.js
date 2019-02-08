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

            // return the first 4 results, create variables for parkname and address key
            // let headerText = parkSearch.textContent.replace(" ", "_").toLowerCase()
            let parksHTMLHeader = `<h1>Here's our results for "${parkSearch}".</h1>`
            document.querySelector("#searchResults").innerHTML = parksHTMLHeader

            let emptyHTMLstring = ""

            for (i = 0; i < 4; i++) {
                let parkName = parsedParks[i].park_name
                let parkAddress = parsedParks[i].mapped_location_address
                // target div container and throw info into index.html

                // document.querySelector("#searchResults").innerHTML += 
                emptyHTMLstring +=
                    `<div id="returnedEventDiv-${[i]}"><h3 id="event-${[i]}">${parkName}</h3><h4>${parkAddress}</h4><button id="saveBtn" class = "btn${[i]}">Save</button></div>`
            }
            document.querySelector("#searchResults").innerHTML += emptyHTMLstring
        })
})

//

document.querySelector("#searchResults").addEventListener("click", () => {
    const resultsContainer = event.target.parentNode;
    if (event.target.id === "saveBtn") {
        console.log("You are getting somewhere!")
        const itenContainer = resultsContainer.cloneNode(true);
        document.querySelector("#chosenPark").appendChild(itenContainer);
        
    }
})


// document.querySelector("#chosenPark").remove("#saveBtn")

// need to remove the button from the copied item. Need to save results even when page reloads.

//clean up the search protocol? a checklist of park features and map functions


    // let searchContent = document.getElementById("#searchResults")
    // let itineraryContent = document.getElementById("#chosenPark")
    // itineraryContent.innerHTML = searchContent.innerHTML