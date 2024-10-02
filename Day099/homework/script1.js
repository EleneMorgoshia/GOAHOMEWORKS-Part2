// codewars
//codewars1:
function shortcut (string) {
    let vowels = ['a','e','i','o','u'] // ხმოვნების სია
    let lettersArray = string.split('') // გადმოცემული სტრინგი გავსპლიტეთ(სია შევქმენით სადაც სტრინგშ არსებლი ელემენტები(ასოები) გადავიტანეთ ახალ სიაში)
    
    let withoutVowelsArray = lettersArray.filter((item) => {
        return !vowels.includes(item) // filter-ის გამოყენებით თუ ხმოვნებიის სია არ მოიცავს აითემს(ანუ გადმოცემულ ერეიში შევამოწმებთ ასეობგერა არის თუ არა ხმოვანი), მაშინ ჩავარდება ის ახალ სიაში
    })
    
    return withoutVowelsArray.join('') // ვაბრუნებთ გასტრინგებულ მნიშნელობას
}

console.log(shortcut('hello'))

//codewars2
var capitals = function (word) {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lettersArray = letters.split('') // letters array
    let wordsLettersArray = word.split('') // string array 

    let resultArray = []
    for(let i  = 0 ; i < wordsLettersArray.length ; i++){
        if(lettersArray.includes(wordsLettersArray[i])){
            resultArray.push(i)
        }
    }

    return resultArray

};

console.log(capitals('CodEWaRs'))

//იგივე ამოცანა REDUCE-ით
var capitals = function (word) {
    let wordsLettersArray = word.split('') 

    const result  = wordsLettersArray.reduce((arrOfIndex,item,index) => {
        if( item == item.toUpperCase()){
            arrOfIndex.push(index)
        }

        return arrOfIndex
    }, [])

    return result
};


//Codewars3
function squareDigits(num){
    let stringedNum = String(num)
    let numArray = stringedNum.split('') // numbers array. e.x [3,2,1,2]
    let squareArray = numArray.map((item,index) => {
        return item * item
    })
    
    return Number(squareArray.join(''))
}

//Codewars4
function distinct(a) {
    //a = [1,1,2]
    const resultArray = a.reduce((accumulator , item) => {
        if(!accumulator.includes(item)){
            accumulator.push(item)
        }

        return accumulator
    } , [])
    
    console.log(resultArray)
}

console.log(distinct([1,1,2]))

//codewars5
function evenNumbers(array, number) {
    //e.g array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const evensArray = array.filter((item, index) => {
      return item % 2 == 0                                
    })
    

    //e.g evernsArray = [2,4,6,8]
    let reservedArray = evensArray.reverse() //[8,6,4,2]
    let resultArr = reservedArray.slice(0,number ) // [8,6,4]

    return resultArr.reverse()
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
//უფრო ნაკლებ ხაზში
function evenNumberss(array, number) {
    //e.g array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const evensArray = array.filter((item, index) => {
      return item % 2 == 0                                
    })
    
    return (evensArray.reverse().slice(0,number)).reverse()
}

console.log(evenNumberss([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
////////////////////////////////
// additional tasks
//task1:
//given an array of numbers , return the largest number

const numbersArray = [1,5,10,99]
let result = numbersArray.reduce((largest , item) => {
    if(item > largest){
        largest = item
    }

    return largest
} , 0)

console.log(result)