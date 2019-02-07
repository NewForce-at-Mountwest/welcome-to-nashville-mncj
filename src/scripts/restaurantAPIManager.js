// api key 8e253351e9ea711b686cc16a24557c2f //

fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${query}`, {
    headers: {
        "Accept": "application/json",
        "user-key": "8e253351e9ea711b686cc16a24557c2f"
    }
})
    .then(restaurant => restaurant.json())
    .then(results => {

        let resultsString = ""
        document.querySelector("#searchResults").innerHTML ="";

        for (i = 0; i < 4; i++) {
            let restaurantName = results.restaurants[i].restaurant.name
            // let restaurantAddress =results.restaurants[i].restaurant.address
            console.log(restaurantName)

            printRestaurants(restaurantName)
            console.log(resultsString)

        }
    })


