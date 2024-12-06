//შქმენიტ სამო ფუნქცია , აქედან ორი ფუნქცია მთლიანად
//იქნება ასინქრონიზირებული.
//რაც გავაკეთთ მაგის მსგავსი 

//ordering
let iceCream = prompt('choose the ice cream type from: Chocolate, Vanila, strawbery . ')
let  iceCreamType ;
const orderIceCream = (callback) => {
    console.log('what kind of ice-cream do you want')
    setTimeout(() => {
        iceCreamType = iceCream +  ' icecream'
        callback(iceCreamType)
    } , 1000)
}


const compleatedOrder =  () => {
    console.log('Your order is in the middle of processing')
    setTimeout(() => {
        console.log(iceCreamType + ' is ready to go')
    } , 500)
}

const greeting = () => {
    console.log('Welcome to our shop')
    orderIceCream(compleatedOrder)
}

greeting()


window.addEventListener('click' , callback)
function callback() {
    console.log('click')
}