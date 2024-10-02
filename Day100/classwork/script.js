//map - სიას გადავცემთ და ის ქმნის ობიექტებს(key: value)
//methods:
//set - ჩავამატებთ ახალ წყვილებს 
//get - key-ს გადავცემთ და გვიბრუნებს valueს
//delete- delete-ის გამოყენებით ვშლით წყვილებს
//clear - მთ₾იანად ვასუფთავებთ მეპს
//has - keyს გადავცემთ და თუ არსებობს ესეთ იწყვილი გვიბრუნებს trues-ს თ არადა false
//forEach - გადავუვლით მეპს და შეგვიძლია ვიმოქმედოთ valueბსადა key-ებზე 
//keys() - მივწვდებით key-ებს
//values() - მივწვდებით value-ბს 
//Entries -  ერეის სახით აბრუნებს valuesებს და keysს
const map = new Map([ 
    ["apples", 50],
    ["bananas" , 300],
    ['orange' , 200],
    ["apples2", 50],
    ["bananas2" , 300],
    ['orange2' , 200],
]) // prototype - object

console.log(map.size) // size - ზომავს map-ის სიგრძეს
console.log(map)
/////////////////////////////////////////////////
// set - set-ის დახმარებით ჩავამატებ წყვილებს
map.set('kiwi' , '5000')  //- წყვილებს ვქმნით და ვამატებთ ობიექტიში
///////////////////////////////////////////////
// get - key-ს გადავცემთ და გვიბრუნებს მის მნიშვნელობას
console.log(map.get('apples'))
//////////////////////////////////
// delete - შეგვიძლია წავშალოთ ნებისმიერ იწყვილი
map.delete('bananas')
console.log(map)
///////////////////////////////////////////
//clear - სულ ასუფთავებს მთლიან ობიექს
// map.clear() // ვშლით  ყველა წყვილს
console.log(map)
/////////////////////////////////////
// has -  აბრუნებს flase ან true-ს ..key-ს მიხედვიტ აბრუნებს ეგეთი წყვილი არსებობს თ არა მაპში
console.log(map.has('oranges'))
///////////////////////////////////////
//forEach - შეგვიძლია გადავუაროთ წყვილებს  მეპში
map.forEach((value , key) => {
    console.log(key + '=' + value)
}) // დაბეჭდავს key ს და მათ მნიშვნელობას 

/////////////////////////////////////////////
// keys  და values 
console.log(map.keys())
for(const x of map.keys()){
    console.log(x)
} // ეს დაბეჭდავს ყველა keyს

for(const x of map.values()){
    console.log(x)
} // ეს დაბეჭდავს ყველა value-ს
///////////////////////////////////////////
//Entries -  ერეის სახით აბრუნებს valuesებს და keysს
console.log(map.entries())
for(const x of map.entries()){
    console.log(x)
}