//async
//callbacks promise

//async await

const getWeatherApi = () => {
    return new Promise((resolve, reject) => {
        resolve('sunny')
    })
}

async function  getData(){
    try{
        const response = await  getWeatherApi
        console.log(response)
    }catch(err){
        console.log(`Error ${err}`)
    }
    finally{
        console.log('all done')
    }
}

getData()





function getData2() {
    getWeatherApi()
        .then((data) => {
            console.log(`success ${data}`)
        })
        .catch((err) => {
            console.log(`Error ${err}`)
        })
}


//asyncის დახმარებით შეგვძლია ფუნქცია გავხადოთ promise (ანუ promise დააბრუნოს)
async function asyncTestFunc(){
    return 'xelou' //promise
}

async function test() {
    const data = await asyncTestFunc() //xelou
    try{
        const data = await asyncTestFunc()
        console.log(data)
        return data
    }catch(err){
        return `Error; ${err}`
    }
}

async function promiseUnlock(){
    const finalResult = await test()

    console.log(finalResult)
}