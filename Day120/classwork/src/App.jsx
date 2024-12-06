import Header from './Header'
import Card from './Card'
import product1 from "./images/product1.jpg"
import product2 from "./images/product2.jpeg"
import product3 from "./images/product3.jpg"
import product4 from "./images/product4.webp"
import product5 from "./images/product5.jpg"

// creating teh list where we store teh objects
const products = [
    //object1
    {
        id:'111',
        price:"15$",
        photo:product1
    },

    //object2
    {
        id:'222',
        price:"18$",
        photo:product2
    },

    //object3
    {
        id:'333',
        price:"16$",
        photo:product3
    },
    

    //object4
    {
        id:'444',
        price:"12$",
        photo:product4
    },

    //object5
    {
        id:'555',
        price:"11$",
        photo:product5
    },

]


function App() {
    


    return(
        <div>
            <Header />
            <h1>Goa is the best</h1> 

            <div>
                {/* in order to use js method , map method , we have to use {} */}
                
                {
                    //გადავუარეთ სიას, რომელიც ამავე ფაილში შევქმენით, ობიექტების შესანახად(მე-9 ხაზზე)
                    products.map(item => {
                        return <Card title = {item.id} image = {item.photo} price = {item.price} key = {index} />
                    })
                }

            </div>
        </div>
    )
}

export default App
