//LA
function updateTime(){
    let losAngelesElement = document.querySelector("#los-angeles")
    let losAngelesDateElement = losAngelesElement.querySelector(".date")
    let losAngelesTime = moment().tz("America/Los_Angeles");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time")

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY")
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A [</small>]")

    let parisElement = document.querySelector("#paris")
    let parisDateElement = parisElement.querySelector(".date")
    let parisTime = moment().tz("Europe/Paris");
    let parisTimeElement = parisElement.querySelector(".time")

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY")
    parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A [</small>]")

    
}

setInterval(updateTime, 1000)
//paris




