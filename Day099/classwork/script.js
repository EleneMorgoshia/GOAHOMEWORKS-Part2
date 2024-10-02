//array methods
//map, filter, find , findIndex


//concat -  გააერთიანოს ორი სია(სადაც გაერთანებულია სიის ელემენტები)
const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]

const concatArr = arr1.concat(arr2) //გაერთიანება
console.log(arr1)
console.log(arr2)
console.log(concatArr)

////////////////////////////
// indexof
const arr = ['xinkali','mwvadi','kababi','xatchapuri']

console.log(arr.indexOf('mwvadi'))
///////////////////////////
//slicing - კონკრეტული ინდექსიდა,კონკრეტულ ინდექსზე მდგომი ელემენტებზე წვდომა
const array = ['mwvadi','kababi','xatchapuri','sachmeliN1',
    'sachmeliN2' , 'sachmeliN3','sachmeliN4',
    'xinkali'
]

console.log(array.slice(3,5)) //მესამე ინდექსიდან მე5 ინდექსამდე იბეჭდება საჭელები
//////////////////////////////////
//splice - კონკრეტული ინდექსიდან, სასურველი რაოდენბის ბიჯით(მაგ2 ) იმ ინდექსამდე წაიშლება ელემეტები

const anotherArray = [
    'mwvadi','kababi','xatchapuri','sachmeliN1',
    'sachmeliN2' , 'sachmeliN3','sachmeliN4',
    'xinkali'
]

const index = arr.indexOf('xatchapuri')
anotherArray.splice(2 , 4) //მეორე ინდექსიდან , ერთის ბიჯით ინდექსამდე , წაიშლება ელემენტები
console.log(anotherArray)
////////////////////////////
// array methods
//map - გადაუაროს,გადამაპოს სია და მათგან შექმნას ახალი სია
//filter - ვქმნით სიას და რაღც პირობის მიხედვითძველი სიიდან ახალში გადაგვაქვს ელემენტები
//find - ვეძებთ სასურველი პირობის მიხედვით ელემენტს და ვაბრუნებთ მას
//findIndex - ვეძებთ სასურველი პირობის მიხედვით ელემენტის ინდექსს და ვაბრუნებთ მას 
//concat - ორ სიას ვაერთიანებთ და ვიღებთ ახა ლსიას
//indexOf - ვიგებთ სიაში სასურველი ელემენტის ინდექსს
//slice - კონკრეტული ინდექსიდან კონკრეტულ ინდექსამდე ვწვდებით ელემენტებს
//splice - კონკრეტული ინდექსიდან , სასურველი ბიჯით , რა ელემენტამდეც მივალ , იქამდე ვშლით ელემენტებს
///////////////////////////////////////

const arrray1 = [1,2,3,4]
const arrray2 = [...arrray1] //arrray1-ის თითეული ელემენტი გადმოვაკოპირეთ arrray2ში

const otherArrray = [...arrray1 , ...arrray2]


// arrray1.push(5)
arrray2.push(10)

console.log(`here it is arrray1 : ${arrray1}`)
console.log(`here is arrray2 : ${arrray2}`)
console.log(otherArrray)