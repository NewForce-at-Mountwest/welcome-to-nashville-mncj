//adding click event to search button

document.querySelector("#restaurantSearchBtn").addEventListener("click", () => {

    //grabbing search query from container and searching API
    const restaurantSeachTerm = document.querySelector("#restaurantSearchBar").value;
    console.log(restaurantSeachTerm)
    apiManagerRestaurant(restaurantSeachTerm)
})

//adding save button to save to itinerary


const restaurantResultsString = (name, address, i) => {
    return `<p>${name} ${address} <button type="button" id = "saveBtn" class = "btn${i}">save</button></p>`
}

//creating HTML string with search results in search result div
const printRestaurants = (name, address, i) => {
    const restaurantHTMLString = restaurantResultsString(name, address, i);
    document.querySelector("#searchResults").innerHTML += restaurantHTMLString;

}

//saving to itinerary
document.querySelector("#searchResults").addEventListener("click", () => {
    document.querySelector("#restaurantItinerary").innerHTML = ""
    const resultBtns = event.target.id.split("-");
    let restaurantText1 = document.querySelector(`#event-${resultBtns[1]}`).textContent
    let restaurantText2 = `Restaurant: ${restaurantText1}`

    document.getElementById(`returnedRestaurantDiv-${resultBtns[1]}`).remove()
    document.querySelector("#restaurantItinerary").innerText = restaurantText2
})

//my code
// document.querySelector("#searchResults").addEventListener("click", () => {

//    const addRestaurantToItin = event.target.parentNode;
//     if(event.target.id === "saveBtn") {
//         const restaurantItin = addRestaurantToItin.cloneNode(true);
//         // document.querySelector("#searchResults").innerHTML = "";


//         document.getElementById("restaurantItinerary").innerHTML = "";
//         document.getElementById("restaurantItinerary").appendChild(restaurantItin);
//         document.querySelector("#saveBtn").remove()
//end of my code

        // document.querySelector("#restaurantItinerary.btn[i]").remove()
        // event.target.id.saveBtn[i].remove()

        // document.getElementById("saveBtn").remove()
        // if(event.target.id === "saveBtn" && event.target === "itineraryDiv") {
        // itineraryDiv.saveBtn.remove()
        // }
//     }

// })