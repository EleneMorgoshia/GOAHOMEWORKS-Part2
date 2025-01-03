// 1) დღევანდელ ნასწავლ მასალაზე მოიძიოთ თქვენთვითონ ინფორმაცია და გაიღრმავოთ ცოდნა ამ საკითხში
// 2) მოიძიეთ ინფორმაცია memory leak, stack overflow, garbage collection, call stack, heap memory, js engine

//1)js engine -  ჯავასკრიპიტის ძრავი კითხულობს ჩვენს დაწერილს კოდს და გარდაქმნის მანქანურ კოდად
//ის ჩაშენებულია ბრაუზერებში. არის jit - just-in-time კომპილაცია. ანუ კომპილრებსაც მოიცასვ და ინტერპრეტერებსაც

// როგორ მუშაობს  js ძრავი 
// A - parser - პირველი ნაბიჯი. ამ დროს კოდი გარდაიქმნება მონაცემთა სტრუქტურად
//რომელსაც ეწოდება - abstract Syntax Tree (AST) 

// B- interpreter (- კოდის გარდაქმნის პროცესი მაქნანურ კოდად )

// C - profiling -  კომპილერი  ააანალიზებს კოდის იმ ნაწილს,რომელიც ყველაზე ხშრად არის გაშვებული
//ეს არის კოდის ის ნაწილი რომელიც უნდა იყოს ოპტიმიზირებული 

// D - compiler 

// E - Optimisation - ბევრ ოპტიმიზირებულ ტექნიკას იყენებს ამ დრორ პროგრამა რო ყველაზე ხშირად გაშვებული კოდი
// გაუშვას 

//F - execution - გაშვება 
//////////////////////////////////////
//მეხსიერება
//memory life cycle - 1)მეხსიერების გამოყოფა 2) გამოყოდილი მეხსირების გამოყენება 3) ისეთი მონაცემებისგან გასუფთავება რაც აღარ გვჭირდება


//Memory Stack - სტატიკური მეხსირების გამოყოფა . ანუ ისეთი მონაცემებისთვის არის ეს მეხსიერება
//სადაც ინახება სტატიკური მნიშვნელობები, რომლებსაც გააჩნიათ  ფიქსირებული ზომა და კომპილაციის დრო.
//აქ ინახებს კიდე მისამართები(references)

//references - მისამართები heapში არსებული ობიექტების.

//Memory Heap - heap მეხსიერება, რომელიც გამოყოფილია ისეთი მონაცემთა ტიპებისთვის,რომლებსაც
//არ გააჩნიათ ფიქსირებული,სტატიკური ზომა. მაგ: ფუნქციები, ობიექტები, ერეიები....  

//call stack - ის აკვირდება ფუნქციის გამოძახებას
//to do list ივით არის ფუნქციებისთვის ჩვენს პროგრამაში
//პატარ-პატარა ჩრჩოები იყრებარომელიც მოიცავს არგუმენტებს და ლოკალურ ცვლადებს(რაც ფუნქციაში შევქმენით)

//stack overflow - როცა callstackში ფუნქციები გადააჭარბებს თავის განსაზღვრულ ზომას 
//ანუ როცა განსაზღვრულ რაოდენობაზე მეტი ფუნქიცები არის მაგ დროს გამოდის stack overflow-ს ერორი


//last in , first out -   ძველი მონაცემი იკარგება, ახალი შემოდის 

//garbage collection - განსაზღვრავს გამოუყენებელ ობიქტებს heapში და შლის მათ 


//memory leak მაშინ იჩენს თავს , როცა პროგრამაში გვაქვს მისამართები (references) ,რომლებიც მიმართულია
//იმ ობიექტებისკენ, რომლებიც აღარ არის საჭირო 


