const inp = document.getElementById("inp")
const addBtn = document.getElementById("addBtn")
const updateBtn = document.getElementById("upadateBtn")
const muUl = document.getElementById("myUl")

let inputValue = ''

inp.addEventListener('change',function(e) {
    inputValue += e.target.value // ეს რას შვრება?
})

addBtn.addEventListener("click",function() {
    let li = document.createElement('li')
    myUl.appendChild(li)
    li.innerHTML = inputValue

    inputValue = ''
    inp.value = ''
})

function getInfo(){
    //ვამატებთ XMLHttpRequest-ს 
    let http = new XMLHttpRequest() // შეიქმნა EXMLHttprequest
    // let response = JSON.parse('https://jsonplaceholder.typicode.com/todos')
    
    
    //open()
    http.open('GET' , 'https://jsonplaceholder.typicode.com/todos' , true) //open-ს გადაეცემა 4 მეთოდიდან ერთ-ერთი; 1)GET 2)POST 3)PUT 4)DELETE
    console.log(http)

    //send
    http.send()
    console.log(http)

    
    http.onreadystatechange = function(){
        if(this.readyState == 4){//თუ response მზადაა
            if(this.status == 200){
                let response = JSON.parse(http.response)  // გასტრინგებული გავპარსეთ ( ანუ ობიქტად გადავაკეთეთ)
                
                
                console.log(response[5])
            }else{
                console.log('call failed')
            }
        }   
    }

    // console.log(response)
}



getInfo()
//https://jsonplaceholder.typicode.com/tedos