const btn = document.getElementById('btn')
const p = document.getElementById("p")
const remove = document.getElementById("btn2")



btn.addEventListener('click' , () => {
    localStorage.setItem('name','elene')
    p.innerHTML = localStorage.getItem('name')
    localStorage.setItem("surname" , 'Morgoshia')
})

remove.addEventListener("click" , () => {
    localStorage.removeItem("name")
})


localStorage.setItem("surname" , 'Morgoshia')
p.innerHTML = localStorage.getItem('name')


localStorage.setItem('acc' , JSON.stringify([
    {
        name: 'gabrieli'

    } , 
    {
        name:"nika"
    }
]))

console.log(JSON.parse(localStorage.getItem('acc')))