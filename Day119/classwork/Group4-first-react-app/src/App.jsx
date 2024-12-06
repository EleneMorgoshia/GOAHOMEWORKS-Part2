import Header from "./Header"
import Card from "./Card"
import productsArray from "./Data/productData"

function App() {

  return (
    <div>
      <Header />
      <h1>GOA IS THE BEST</h1>

      <div>
        { //ფიგურული ფრჩხილები,რათა jsკოდი უნდა დავწეროთ
          //მივწვდეთ სიაში არსებულ ყველა ფოტოს
          productsArray.map((item, index) => { //გადავმაპეთ და მივწვდით თითეულ ელემენტს
            return <Card title = {item.id} image={item.photo} price={item.price}  key={index}  />
          })
          
        }
      </div>
    </div>
  )
}

export default App
