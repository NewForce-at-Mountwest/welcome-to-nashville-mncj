document.querySelector("#restaurantSearchBtn").addEventListener("click", () => {

    const restaurantSeachTerm = document.querySelector("#restaurantSearchBar").value;
    console.log(restaurantSeachTerm)
    // restaurantResults(restaurantSeachTerm)
})

const restaurantResultsString = (name) => {
    return `<p>${name} <button type="button" class = "btn${i}">save</button></p>`
}
const printRestaurants = (name) => {
    const restaurantHTMLString = restaurantResultsString (name);
    document.querySelector("#searchResults").innerHTML += restaurantHTMLString;

}
