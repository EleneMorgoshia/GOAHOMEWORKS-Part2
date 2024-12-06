// https://jsonplaceholder.typicode.com/todos

const getApi = () => {
    return new Promise(async (resolve, reject) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()

        resolve(data)
        let randomNumber = Math.random()
        randomNumber > 0.5 ? resolve(data) : reject('fetch faild ')  
    })
}

async function getData(){
    try{
        const data = await getApi()
        console.log(data)
    }
    catch(err){
        console.log(`Eroor ${err}`)
    }
    finally{
        console.log("all done")
    }
}

getData()