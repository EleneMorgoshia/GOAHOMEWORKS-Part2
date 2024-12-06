//imported the logo image from the folder of images
import Logo from "../images/Logo.png"
import "../styles/Header.css"
function Header(){
    return(
        <div className="Header-Div">
            <img src={Logo} alt="" />

            <nav>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Flavours</li>
                    <li>Shop</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;