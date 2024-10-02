const userNumber = document.getElementById('userNumber') // 
const userName = document.getElementById("userName")
const add = document.getElementById("add")
const order = document.getElementById("order")
const contacts = new Map([

])

add.addEventListener('click' , () => {
    order.innerHTML = ''
    contacts.set(userName.value , userNumber.value)
    for(let [name , num] of contacts.entries()){
        const list = document.createElement('li')
        list.textContent = `${name} ~  ${num} ` 
        order.appendChild(list)
    }

    userNumber.value = ''
    userName.value = ''
    console.log(contacts)
})