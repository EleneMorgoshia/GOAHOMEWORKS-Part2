const inp = document.getElementById("inp")
const addBtn = document.getElementById("addBtn")
const updateBtn= document.getElementById("updateBtn")

const myOl = document.getElementById("myOl")

let inputValue = '' 

//change - ცვლის როდასაც ჩაწერას დააასრულებ ინფუთში
//input - ინფუთის ცვლილებას აკვირდება 
//e (event) - პარამეტრად, ანუ აკვირდება მოქმედებას 
inp.addEventListener('input' , function(e) {
    inputValue = e.target.value
    console.log(inputValue)
})

// addBtn.addEventListener('click' , function() {
//    let li = document.createElement('li')
//    let textNode = document.createTextNode(inputValue) ; //შევქმენით ტექსტი,სადაც ჩაიწერა input-ის მნიშნელობა (თითოეულის)

//    li.appendChild(textNode)
//    myOl.appendChild(li)


//     inputValue = ''
//     inp.value = ''
// })


const createTodo = (id , title) => {
    let newListElement = document.createElement('li')
    let textNode = document.createTextNode(title)
    newListElement.appendChild(textNode)
    newListElement.id = id // li - ს რეალური აიდი
    myOl.appendChild(newListElement)

}


function getInfo(){
    //შევქმენით request 
    let http = new XMLHttpRequest()
  
    http.onreadystatechange = function(){
        if(this.readyState == 4){ // თუ მზადაა პასუხი
            if(http.status == 200){ // მონაცემებზე გვაქვს წვდომა 
                console.log('yes')
                let response = JSON.parse(http.responseText)
                // for(let i = 0 ; i < response.length ; i++){
                //     let li = document.createElement('li')
                //     let br = document.createElement('br')
                //     li.textContent = JSON.stringify(response[i])
                //     myOl.appendChild(li)
                //     myOl.appendChild(br)
                //     console.log(response[i])
                // }

                //better version (with map)
                response.map((element)=> {
                    console.log(element.title)
                    createTodo(element.id , element.title) // გამოვიძახეთ ფუნქცია,რომელსაც გადავეცით რისპონსში არსებული ელემენტების id და title
                })
                
            }else{
                console.log('no')
            }
        }
    }

    //open-ის დახმარებით ჩვენი httprequest-ის readystate არის 1 
    http.open('GET' , 'https://jsonplaceholder.typicode.com/todos' , true)
    http.send()// ანუ ახლა წვდომა გვაქვს 28-ე ხაზზე დაწეილ ლინკზე 

    console.log(http.responseText)
    console.log(http)
}

getInfo()
//  let response = JSON.parse('https://jsonplaceholder.typicode.com/todos')

function createToDoItemAtBackend(){
    let http = new XMLHttpRequest()
    http.open('POST' , 'https://jsonplaceholder.typicode.com/todos')
 

    http.onreadystatechange = function() {
        if(this.readyState == 4){
            if(this.status == 201){// თუ წარმატებიტ შეიქმნა
                let response = JSON.parse(this.responseText)

               createTodo(response.id, inputValue)
            }
        }
    }


    let obj = JSON.stringify({
        'userId' : 1,
        'title' : inputValue,
        'compleated': false  
    })

    http.send(obj) // მოთხოვნის გაგზავნასთან ერტად , გავაყოლეთ შექმნილი ობიექტი
}

createToDoItemAtBackend()
addBtn.addEventListener('click' , createTodo)