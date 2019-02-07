// api key 8e253351e9ea711b686cc16a24557c2f //

const apiManagerRestaurant = (userInput) => {
    document.querySelector("#searchResults").innerHTML ="";

fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${userInput}`, {
    headers: {
        "Accept": "application/json",
        "user-key": "8e253351e9ea711b686cc16a24557c2f"
    }
})
    .then(restaurant => restaurant.json())
    .then(results => {

        let resultsString = ""
        

        for (i = 0; i < 4; i++) {
            let restaurantName = results.restaurants[i].restaurant.name
            let restaurantAddress =results.restaurants[i].restaurant.location.address

            printRestaurants(restaurantName, restaurantAddress, i)
            console.log(resultsString)

        }
    })
}

// apiManagerRestaurant("italian")
