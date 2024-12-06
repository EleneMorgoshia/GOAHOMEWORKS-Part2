//ასინქრონიზაცია 

//http requests and responses
//sync and asyn ; ca;;back
//promise 
//async aawait

// console.log('xinkali')
// console.log('mwvadi')
// console.log('xatchaputi')

let xinkali;

const orderXinkali = () => {
    console.log('shevukevtot xinkali')
    setTimeout(() =>{
        xinkali = 'mzadaa xinkali';
        console.log(xinkali)
    } , 1000) 
}


const xinkaliReady = (xinkali) => {
    console.log('miirvit' + xinkali)
}

orderXinkali(xinkaliReady) 


console.log('davrekot mecinklestan ')
console.log('shevukevtot xinkali')


let xinkaliI ;
setTimeout(() =>{
    xinkali = 'mzadaa xinkali';
    console.log(xinkali)
} , 1000) // ეს ცალკეული კოდია და ასინქრონიზირებულად სრულდება,მაგრამ დაბეწდვით დაიბეჭდება ეს ხინკალი ბოლოს

console.log(setTimeout)
console.log('miirtvit')