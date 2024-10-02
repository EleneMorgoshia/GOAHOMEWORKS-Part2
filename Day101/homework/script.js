//იპოვეთ განსხვავება ორ სეტს შორის
//შექმენით ახალი სეტი რომელიც ,მოიცავს ელემენტებს პირველი და მეროე სეტებიდან

const set1 = new Set([1,2,3,4,5,6])
const set2 = new Set([11,5,7,8])

const newSet = new Set([...set1 , ...set2])

console.log([...newSet].filter(num => set1.has(num) != set2.has(num)))
///////////////////////////////
const button = document.getElementById('button')
const set = new Set([])

button.addEventListener('click',function(){
    let num = Math.floor(Math.random() * 7)
    set.add(num)
})

console.log(set)