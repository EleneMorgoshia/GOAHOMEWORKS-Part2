//creating the weather api

const getWeatherApi = () => {
    return new Promise(async (resolve, reject) => {
        const response = await fetch("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}")
        const data = await response.json()

        console.log(data)
    })
}

getWeatherApi()
