//https://jsonplaceholder.typicode.com/todos

const getToDoApi = () => {

    return new Promise((resolve , reject) => {
        //fetch - წამოღება(ინფორმაციის წამოღება apiებიდან)
        fetch('https://jsonplaceholder.typicode.com/todos')
        //ეს resolve და reject რენდომად გამოდის? ანუ ფრომისი რა ლოგიკით არეჯექთებს ან არეზოლვებს?


            //გაიხნსა ფრომის then-ის გამოყენებით 
            .then((data) => { // data - ის მონაცემები, რაც ინახება  apiში
                data.json() // მივწვდით მონაცემებს მაგრამ"დაცულს" , ანუ კიდევ უნდა გავხსნათ (იმიტორო ფრომისს მიბრუნებს )
                    .then((data) => { // ვიყენებთ მეორე then-ს რომ მივწვდეთ უშუალოდ მონაცემებს 
                        resolve(`success ${data}`)
                    })
            })
            .catch(() => {
                reject(`error ${data}`)
            })
            
    })
        
}

const focusMocus = (data) => {
    const newData = Object.entries(data);
    newData.map((item) => {
        console.log(item)
    })

}


getToDoApi()
    .then(focusMocus)
    


