//ვაიმპორტებთ images ფაილიდან იმ ფოტოს,რომელზედაც გვინდა რომ ქვდომა გვქონდეს
//რაცხან ფოლდერშ ივწვდებით ფაილს,უფრო გარედან გვიწევს წვდომის მოპოვება,ამიტომ ორი წერტილი გვინდა მისამართის წინ ..
import product1 from "../images/product1.webp" //"ზუსტი სახელი ფოტოსი"
import product2 from "../images/product2.jpg" 
import product3 from "../images/product3.jpg"
import product4 from "../images/product4.jpg"

//creating the list where we store the objects
const productsArray = [
    {
      id:"product1",
      price:"200$",
      photo:product1
    },
  
    {
      id:"product2",
      price:"20$",
      photo:product2
    },
  
    {
      id:"product3",
      price:"120$",
      photo:product3
    },
  
    {
      id:"product4",
      price:"400$",
      photo:product4
    }
  
  ]

  
export default productsArray