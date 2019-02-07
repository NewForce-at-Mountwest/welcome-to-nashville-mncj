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
            let eventsHTMLHeader = `<h1>Here's your suggested ${meetupParam} events...</h1>`
            document.querySelector("#searchResults").innerHTML += eventsHTMLHeader
            // let eventsHTMLString = ""
            for (i = 0; i < 4; i++) {
                document.querySelector("#searchResults").innerHTML += `<div id="returnedEventDiv-${[i]}"><h3 id="event-${[i]}">${parsedEvents.events[i].name.text}</h3><h4>Scheduled Event Date & Time - ${parsedEvents.events[i].start.local}</h4><p><a href=${parsedEvents.events[i].url} target="_blank">Event Website</a></p><button id="eventBtn-${[i]}">Save to Itinerary</button></div>`
                // console.table(parsedEvents.events[i].name)
            }
            // document.querySelector("#searchResults").innerHTML += eventsHTMLString
        })
})


document.querySelector("#searchResults").addEventListener("click", () => {
    const resultDiv = event.target.id.split("-");
        console.log(resultDiv)
        // wholeCard.remove()
    })
