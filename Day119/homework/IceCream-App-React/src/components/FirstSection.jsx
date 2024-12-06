import Back1 from "../images/Back1.jpg"
import Icecream2 from "../images/Icecream2.png"
import "../styles/FirstSection.css"

function FirstSection(){
    return(
        <div className="FirstSectionDiv">
            <img className="background1" src={Back1} alt="" />
            <img className="Ice-Cream2" src={Icecream2} alt="" />
            <div className="right-content">
                <p className=".intro-p">Dessert - Italy</p>
                <div className="under-right-content">
                    <h1>Give Thanks for Gelato</h1>
                    <p>Treat your guests to the perfect dessert pairings with our handpicked selections, ideal for every pie, cake, or crumble. Order now and have it delivered in time for Thanksgiving—sweeten your holiday spread with ease!</p>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default FirstSection;