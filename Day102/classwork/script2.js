//remove duplicats from an array;
//create a set to store unique elements from an array

const array = [1,2,3,4,4,5,6,7,8,9,9]
const resultArray = array.reduce((acumulator, currentValue) =>{
    if(!acumulator.includes(currentValue)){
        acumulator.push(currentValue)
    }
    return acumulator
} , [])

console.log(resultArray)

const createSet = new Set([])
for(let item of resultArray){
    createSet.add(item)
}

console.log(createSet)
console.log('------------------------')
///////////////////////////////////////////////
//ვამოწმებთ ორი სეტი უდრის თუ არა ერთმანეთს
function equal(set1 , set2){
    const firstsetArray = []
    const secondSetArray = []
    for(let item of set1){
        firstsetArray.push(item)
    }

    for(let item of set2){
        secondSetArray.push(item)
    }
    for(let i = 0 ; i < firstsetArray.length ; i++){
        if(firstsetArray.includes(secondSetArray[i])){
            console.log(`${secondSetArray[i]} is in both array `)
        }else{
            console.log(`${secondSetArray[i]} is not in both aray`)
        }
    }
}

const firstSet = new Set([])
firstSet.add(2)
firstSet.add(10)
firstSet.add(15)
firstSet.add(12)


const secondSet = new Set([])
secondSet.add(2)
secondSet.add(10)
secondSet.add(15)
secondSet.add(12)


console.log(equal(firstSet , secondSet))
