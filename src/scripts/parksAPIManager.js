// target the park search button, add a click event 

document.querySelector("#parkSearchBtn").addEventListener("click", () => {

    // create variable parkSearch and assign its value to that of the parkSearchBar. Add functions editing the search values to  replace capitalization and empty space with usable key values. fetch the data 

    let parkSearch = document.querySelector("#parkSearchBar").value
    let formattedParkSearch = parkSearch.replace(" ", "_").toLowerCase()

    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${formattedParkSearch}=Yes`, {
        "$$app_token": "UV5P5RY4tBY3gDjgiEoopKmGb"

    })

//  parse the data from the api and console log it

        .then(parks => parks.json())
        .then(parsedParks => {
            
// return the first 4 results, create variables for parkname and address key
// let headerText = parkSearch.textContent.replace(" ", "_").toLowerCase()
            let parksHTMLHeader = `<h1>Here's our results for "${parkSearch}".</h1>`
            document.querySelector("#searchResults").innerHTML = parksHTMLHeader
            console.log(parkSearch)
            let emptyHTMLstring = ""
            for (i = 0; i < 4; i++) {
                let parkName = parsedParks[i].park_name
                let parkAddress = parsedParks[i].mapped_location_address

 // target div container and throw info into index.html
                

                emptyHTMLstring +=
                    `<div id="returnedEventDiv-${[i]}"><h3 id="event-${[i]}">${parkName}</h3><h4>${parkAddress}</h4><button id="saveBtn-${[i]}" class = "btn${[i]}">Save</button></div>`
            }
            document.querySelector("#searchResults").innerHTML += emptyHTMLstring
        })
})

document.querySelector("#searchResults").addEventListener("click", () => {
    document.querySelector("#parkItinerary").innerHTML = "" 
    const cloneBtns = event.target.id.split("-")
    
    let itinText = document.querySelector(`#event-${cloneBtns[1]}`).textContent
    let park = `Park: ${itinText}`

    const resultsContainer = event.target.parentNode;
    let removeEvent = document.getElementById(`returnedEventDiv-${cloneBtns[1]}`).remove()
   
}
)
document.querySelector("#searchResults").addEventListener("click", () => {
    const resultBtns = event.target.id.split("-");
    console.log(resultBtns[1])
    let text = document.createTextNode("Park - ")
    console.log(typeof text)
    console.log(text)
    let meetupName = document.querySelector(`#event-${resultBtns[1]}`)
    console.log(typeof meetupName)
    console.log(meetupName)
    let removeEvent = document.getElementById(`returnedEventDiv-${resultBtns[1]}`).remove()
    // let meetupObject = Object.assign({}, text, meetupName)
    // console.log(meetupObject)
        document.querySelector("#itineraryDiv").appendChild(text)
        document.querySelector("#itineraryDiv").appendChild(meetupName)
        
    })


