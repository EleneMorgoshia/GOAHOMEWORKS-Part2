//event loop 

console.log('hello')

let weatherData ;
// const getWeatherApi = (callback) => {
//     setTimeout(() => {
//         weatherData = 'sunny'
//         callback(weatherData)
//     } , 0)
// }

const displayWeather = (Data) => {
    console.log(Data) ;
}

// getWeatherApi(displayWeather)


console.log('finish')
//////////////////////////////////////////////////
//promises - შევქმნათ ასინქორინიზირებული მოქმედებები და ამათ მოჰყვეს კიდებ ახალი მოქმდედებები


//broken promises
//fullfiel promises
//pending promises

//promise maker
const myFirstPromise = new Promise((resolve, reject) => {
    return resolve() // ან აბრუნებს resolve()-ს ან reject()-ს
})


const getWeatherApi = () => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve('sunny')
        })
    })
}

const onSuccess = (data) => {
    console.log(`resolve ${data}`)
}

const onFail = (data) => {
    console.log(`reject ${data}`)
}

const atTheEnd = () => {
    console.log('At the End')
}
getWeatherApi()
    .then(onSuccess) // resolve
    .catch(onFail) //reject
    .finally(atTheEnd) //ყოველთვის იმუშავებს 