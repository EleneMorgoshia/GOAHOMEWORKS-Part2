//classwork1
//given an array of numbers , return a new array
//where only the odd numbers are doubled

const numbersArray = [1,2,3,4,5,6]
const oddNumbersArray = numbersArray.filter((item) => {
    if(item % 2 == 1){
        return item
    }
}) // ფილტრი აბრუნებს მხოლოდ trueს ან false
//ან ემატება სიაში ან არ ემატება ისაშ 

console.log(oddNumbersArray)

const doubledOddNumbersArray = oddNumbersArray.map((item) => {
    return item*2
})
console.log(doubledOddNumbersArray)
////////////////////////////////////////////
// classwork2
function shortcut (string) {
    let vowels = ['a','e','i','o','u']
    let stringArray = string.split("")
    
    const restulArr = stringArray.filter((item)=> {
        return !vowels.includes(item)//თუ არ მოიცავს ხმოვნები სტრინგშ არსებულ ასოებს , მაშინ ცაამატოს ახალ სიაში
    })
    
    return restulArr.join("") // მიღებული სია გავსტრინგეთ
}