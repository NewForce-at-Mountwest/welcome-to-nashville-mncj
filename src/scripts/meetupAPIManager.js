document.querySelector("#meetupSearchBtn").addEventListener("click", () => {
    let meetupParam = document.querySelector("#meetupSearchBar").value
    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville_${meetupParam}&token=IPLOQNFXM2QL7XEZDFB2`, {
        headers: {
            "Authorization": "Bearer IPLOQNFXM2QL7XEZDFB2",
            "Accept": "application/json"
        }
    })
        .then(events => events.json())
        .then(parsedEvents => {
            // console.log(parsedEvents)
            document.querySelector("#searchResults").innerHTML = `<h1>Here's your suggested ${meetupParam} events...</h1>`
            let eventsHTMLString = ""
            for (i = 0; i < 4; i++) {
                eventsHTMLString += `<div id="returnedEventDiv-${[i]}"><h3 id="event-${[i]}">${parsedEvents.events[i].name.text}</h3><a href=${parsedEvents.events[i].url} class="url"  target="_blank">${parsedEvents.events[i].url}</a><button class="button" id="eventBtn-${[i]}">Save to Itinerary</button></div>`
                // To add date and time to concatenated HTML String
                // <h4>Scheduled Event Date & Time - ${parsedEvents.events[i].start.local}</h4>
            }
        document.querySelector("#searchResults").innerHTML += eventsHTMLString
        })
})

document.querySelector("#searchResults").addEventListener("click", () => {
    const resultBtns = event.target.id.split("-");
    console.log(resultBtns[1])
    let text = document.createTextNode("Meetup - ")
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



