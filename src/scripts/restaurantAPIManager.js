// api key 8e253351e9ea711b686cc16a24557c2f //

//creating string of information from API for user search
const apiManagerRestaurant = (userInput) => {

    //clearing results when a new search is queried
    document.querySelector("#searchResults").innerHTML = "";

    //fetching API

    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${userInput}`, {
        headers: {
            "Accept": "application/json",
            "user-key": "8e253351e9ea711b686cc16a24557c2f"
        }
    })

        //converting to JSON
        .then(restaurant => restaurant.json())
        .then(results => {

            //creating HTML header to show when displaying search results

            document.querySelector("#searchResults").innerHTML = `<h1>Here's your suggested ${userInput} events...</h1>`

            let restaurantHTMLString = ""
            for (i = 0; i < 4; i++) {

                let restaurantName = results.restaurants[i].restaurant.name
                let restaurantAddress = results.restaurants[i].restaurant.location.address
                restaurantHTMLString += `<div id="returnedRestaurantDiv-${[i]}"><p id="event-${[i]}">${restaurantName}, ${restaurantAddress}</p><button class="button" id="eventBtn-${[i]}">Save to Itinerary</button></div>`
                // To add date and time to concatenated HTML String
                // <h4>Scheduled Event Date & Time - ${parsedEvents.events[i].start.local}</h4>
            }
            document.querySelector("#searchResults").innerHTML += restaurantHTMLString
        })


    // To add date and time to concatenated HTML String
    // <h4>Scheduled Event Date & Time - ${parsedEvents.events[i].start.local}</h4>
}
        // document.querySelector("#searchResults").innerHTML += eventsHTMLString

            // let restaurantHeader = `<h2>Here's your suggested ${userInput} restaurants</h2>`

            // document.querySelector("#searchResults").innerHTML += restaurantHeader;

            //looping through the results and limiting the results to 4
            // for (i = 0; i < 4; i++) {
            //     let restaurantName = results.restaurants[i].restaurant.name
            //     let restaurantAddress = results.restaurants[i].restaurant.location.address
                //printing results to dom
                // printRestaurants(restaurantName, restaurantAddress, i)
                // console.log(resultsString)



// apiManagerRestaurant("italian")
