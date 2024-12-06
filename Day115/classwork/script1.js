//შექმენით ორი ინფუთი და ერთი ღილაკი
//როდესაც მოხმარებელი დააჭერს ამ ღილაკს
//ინფუთებშ შეყვანილი მონაცემები შეინახოს ლოკალურ მეხსიერებაში
//შენახვის შემდეგ სადმე გამოჩნდეს პარაგრაფი სადაც ჩაიწერება username: (აქ ლოკ მეხსიერებიდან სახ)
//password : (აქ ლოკ პაროლი)

const name = document.getElementById("name")
const password = document.getElementById("password")
const btn = document.getElementById("btn")
const userN = document.getElementById("userN")
const userP = document.getElementById('userP')

btn.addEventListener("click", () => {
    localStorage.setItem('name', name.value)
    localStorage.setItem('password' ,password.value)
    userN.innerHTML = localStorage.getItem('name')
    userP.innerHTML = localStorage.getItem('password')

})

userN.innerHTML = localStorage.getItem('name')
userP.innerHTML = localStorage.getItem('password')

import user  from '/script2.js'
console.log(user)