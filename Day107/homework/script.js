//html ფაილში გამოვსახოთ ის რაც კლასში ავხსენით(დომში გადმოვიტანოთ)
//იმ ყველაფრის გაანალიზება, რაც კლასში ავხსენით

//HTTP Request - მოთხოვნა სერვერს, იმ მონაცემების წამოღებაზე რაც გვინდა
//response - სერვერის პაუსუხი ჩვენს მოთხოვნაზე

//JSON - ჯავასკრიპტის ობიექტის აღწერა(ობიექტიია). 
//არის ტექსტური ფორმატის,რომელიც ამარტივებს მონაცემების გაცვლა-გაზიარებას კლიენტსა და სერვეს შორის

//normal object
let obj = {
    name: 'Elene',
    surname: 'Morgoshia'
}

//json object
let jsonObj = {
    'name' : 'Elene',
    'surname': 'Morgoshia'
}

//stringify - (მეთოდი)ობიექტის სტრინგად გადაკეთბა(ეს კარგია მეხსიერების დასაზოგად)
let strJson = JSON.stringify(jsonObj)
let oldObj = JSON.stringify(obj)

console.log(jsonObj) //
console.log(strJson)
console.log(oldObj)

//parse - გასტრინგებული ობიექტის , ჩვეულებრივ ობიექტად გადაკეთება
let unStringedObj = JSON.parse(strJson)
console.log(unStringedObj)

//asynchronous code - კოდის შესრულება ბექგრაუნდზე(ანუ ხაზ-ხაზად კითხულობს კოდს ჯავასკრიპტი  და ეს კოდი რომელიც ბექრაუნდზე ეშვება არის ასინქრონიზირებული კოდი)

//ajax - მოკლე ფორმა ასინქრონიზაციის და XML
//ის აძლევს ვებ ფეიჯს იმის საშუალებსას რომ დააბდეითდეს
//ასინქრონიზორებულად მონაცემების გაცვლით ბექენდთან
//ajax გამოიყენება იმისთის , რომ მივიღოთ და გავგზავნოთ
//json ობიექტები რაც ძაან ხშრია დღს დღეობით 

//XMLHttpRequest Object - ajax იყენებს ამ xmlHttpRequest 
//რომ შექმნას მოთხოვნა იმისთის რომ გააეგზავნოს სერვერზე 
//ანუ იქმნება http request ,იმისთის რომ შევცვალოთ და გაანვაახლოთ html ის ფეიჯის კონტენტი

//readyState - ეს ფროფერთი უნარჩუნებს xmlhttpRequest-ს თავის სტატუსს
//ხელმისაწვდომი სტატუსებია: 

//UNSENT -  რექუესთი იყო ინიციალიზებული, მაგრამ open არ გამოძახებულა, მნიშვნელობა არი 0
//OPENED -  open გამოძახებულია და მნიშვნელობა არის 1
//LOADING - რექუესთი არის დამუშავების პროცესში. მნიშვნელოაბ 3
//DONE - request არის შესრულებული და პასუხი არის მზად . მნიშვნელობა 4


//onreadystatechange - ეს ფროფერთი განსაზღვარვს იმ ფუნქციის გაშვებას(ანუ როდის გაეშვება ის ) , როცა readystate იცვლება