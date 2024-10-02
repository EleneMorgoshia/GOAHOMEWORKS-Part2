//შექმენით მაპი, რომელშიც შექმნის შემდეგ დაამატებთ წყვილებს
//დაბეჭდავთ და შეამოწმებთ ამ მაპს
//შეამოქმებთ ამ მაპში არის თუ არა რაიმე წყვილი
//მივწვდებით თითოეულ წყვილს და დავბეჭდავთ
//ასევე ცაკლე მივწვდებით თითოეულ key-ს  value-ს
//და მათ დავბეჭდავთ

const persons = new Map( [

])

//ვამატებთ ახალ წყვილს მაპში
persons.set('Elene','Student')
persons.set('Iako' , 'developer')
persons.set('dachi' , 'data scientist')
persons.set('gabrieli' , 'Mentor')
persons.set('sandro' , 'AI engineer')
persons.set('berdia' , 'student')
persons.set('merabi','student')


//მიეკუთვნება თუ არა კონკრეტული key მეპს
console.log(persons)
console.log(persons.has('berdia')) // has მეთოდით გავიგებთ არის თუ არა ბერდისა მეპში
console.log(persons.has('mercedes'))

//თითოეული keyს და valueს დაბეწდვა
for(let [k , v] of persons.entries()){ // enteries წვდება key-ს value-ს
    console.log(`${k} ~ ${v}`)
}

//keyს დაბეჭვდა
for(let k of persons.keys()){
    console.log(k)
}

console.log('---------------------------------')

//value-ს დაბეჭდვა
for(let v of persons.values()){
    console.log(v)
}

