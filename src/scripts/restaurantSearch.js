document.querySelector("#restaurantSearchBtn").addEventListener("click", () => {

    const restaurantSeachTerm = document.querySelector("#restaurantSearchBar").value;
    console.log(restaurantSeachTerm)
    apiManagerRestaurant(restaurantSeachTerm)
})

const restaurantResultsString = (name, address, i) => {
    return `<p>${name} ${address} <button type="button" class = "btn${i}">save</button></p>`
}
const printRestaurants = (name, address, i) => {
    const restaurantHTMLString = restaurantResultsString (name, address, i);
    document.querySelector("#searchResults").innerHTML += restaurantHTMLString;

}
