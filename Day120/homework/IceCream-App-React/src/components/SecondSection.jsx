import IceCreamArray from "../Ice-Cream-Data/data";
import Card from "./Card";
import "../styles/SecondSection.css"

function SecondSection(){
    return(
        <div className="SecondSection">
            <h1>Find Your Favorite Flavor Combinations</h1>
            <div className="ice-cream-list">
                {/* ერეის მეთოდს რახან ვიყენებთ არ უნდა დამავიწდყეს {}  */}
                { 
                    IceCreamArray.map((item,index) => {
                        return <Card image = {item.image} name = {item.name} info = {item.info} key = {index}/>
                    })
                }
                
            </div>
        </div>
    )
}

export default SecondSection;