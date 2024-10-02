//map and set
//set - ინახავს ელემენტებს(არ ინახავს წყვილებს)
//set - თითოეული მნიშვნელობა მხოლოდ ერთხელ არის შესაძლებებლი რომ გამოვიყენოთ
const set = new Set([
    //{
       // name: 'Elene'
   // } , //object
    // [1,2,3,4,5,67,89] // array


])


//setში ელემენტების დამატება
set.add('goa')
set.add('xinkali')

console.log(set)
for(let x of set){
    console.log(x)
}

//set-ის გასუფთავება
// set.clear()
// console.log(set)

//delate -ით ვშლით ელემენტებს
// set.delete('xinkali')
// console.log(set)

//entries
for(let element of set.entries()){
    console.log(element)
}

//აქვს თუ არა რამე კონკრეტული ელემენტი სეტს
console.log(set.has('xinkali'))