const getWeatherApi = () => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("*sunny*")
        })
    })
}

const getWeatherIcon = (weather) => {
    return new Promise((resolve , reject) => {
        let icon ;
        switch(weather){
            case 'sunny':
                icon = '*sun*'
                break
            case 'rainy':
                icon = '!rain!'
                break
            default:
                icon = 'icon not found'
        }

        setTimeout(()=>{
            if(icon == 'icon not found'){
                reject(icon)
            }else{
                resolve(icon)
            }
        })
    })
}

const getData = (data) => {
    console.log(data)
}

const onFail = (data) => {
    console.log(`reject ${data}`);
}

getWeatherApi()
    .then(getWeatherIcon) 
    .then(getData)
    .catch(onFail)









// const onSuccess = (data) =>{
//     console.log(`resolve ${data}`)
// }

// const onFail = (data) => {
//     console.log(`reject ${data}`);
// }

// const atTheEnd = () =>{
//     console.log('The end')
// }

// getWeatherApi()
//     .then(onSuccess)
//     .catch(onFail)
//     .finally(atTheEnd)
//https://jsonplaceholder.typicode.com/todos