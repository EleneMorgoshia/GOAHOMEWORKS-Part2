//classwork
//შექმენიტ set, რომელშც შემდეგ დაამატებთ ელემენტებს
//დაბეჭდავთ და შეამოწმებთ ამ სეტს. შეამოწმებთ არის თ უარა ელემენტები
//მიწვდებით თითეულ მთგანს და 
//დაბეჭდავთ მათ.ასევე ცალკე გამოიტანთ valueბეს


const mySet = new Set()

//adding the elements in the set
mySet.add(1)
mySet.add('12')
mySet.add(true)
mySet.add([1,2,3,4,5,6])
mySet.add({name:'Eleme'})

const myMap = new Map([
    ['iaone' , 'developer'],
    ['marika' , 'Musician']
])

myMap.set(mySet)
mySet.add(myMap)
console.log(mySet)

//თითოეული ელემენტის დაბეჭდვა
for(let item of mySet){
    console.log(item)
}

//mivwvdet map -is wyvils
for(let item of mySet){
    if(item instanceof Map === true){
        item.forEach((k,v) => {
            console.log(`${k} ~ ${v}`)
        })
    }
}
