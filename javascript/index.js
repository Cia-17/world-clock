//LA
function updateTime(){
    let losAngelesElement = document.querySelector("#los-angeles")
    
    if(losAngelesElement){
            let losAngelesDateElement = losAngelesElement.querySelector(".date")
            let losAngelesTime = moment().tz("America/Los_Angeles");
            let losAngelesTimeElement = losAngelesElement.querySelector(".time")

            losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY")
            losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A [</small>]")


    }
    
    let parisElement = document.querySelector("#paris")
    
    if(parisElement){
    let parisDateElement = parisElement.querySelector(".date")
    let parisTime = moment().tz("Europe/Paris");
    let parisTimeElement = parisElement.querySelector(".time")

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY")
    parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A [</small>]")
    }
    
}

function updateCity(event){
    let cityTimeZone = event.target.value;
    if(cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone)
    let citiesElement = document.querySelector("#cities")
    citiesElement.innerHTML = citiesElement = `
        <div class="city">
                <div>
                <h2>${cityName}</h2>
                <div class="date">
                ${cityTime.format("MMMM Do YYYY")}
                </div>
                </div>
                <div class="time">
                ${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}
                </div>
            </div>
    `

}

updateTime();
setInterval(updateTime, 1000)
//paris



let citiesSelectElement = document.querySelector("#city")
citiesSelectElement.addEventListener("change", updateCity)






