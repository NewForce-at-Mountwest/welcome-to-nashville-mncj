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
                eventsHTMLString += `<div id="returnedEventDiv-${[i]}"><p id="event-${[i]}">${parsedEvents.events[i].name.text}</p><a href=${parsedEvents.events[i].url} class="url"  target="_blank">Event Website</a><button class="button" id="eventBtn-${[i]}">Save to Itinerary</button></div>`
                // To add date and time to concatenated HTML String
                // <h4>Scheduled Event Date & Time - ${parsedEvents.events[i].start.local}</h4>
            }
        document.querySelector("#searchResults").innerHTML += eventsHTMLString
        })
})

    document.querySelector("#searchResults").addEventListener("click", () => {
        document.querySelector("#meetupItinerary").innerHTML = ""
        const resultBtns = event.target.id.split("-");
        let meetupText1 = document.querySelector(`#event-${resultBtns[1]}`).textContent
        let meetupText2 = `Meetup: ${meetupText1}`
        // let meetupName = document.querySelector(`#event-${resultBtns[1]}`)
        let removeEvent = document.getElementById(`returnedEventDiv-${resultBtns[1]}`).remove()
            document.querySelector("#meetupItinerary").innerText = meetupText2
        })