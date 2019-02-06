// api key 8e253351e9ea711b686cc16a24557c2f //

fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating", {
        headers: {
            "Accept": "application/json",
            "user-key": "8e253351e9ea711b686cc16a24557c2f"
        }
    })
    .then(r => r.json())
    .then(results => {
    })