import "../styles/Footer.css"

function Footer(){
    return(
        <div className="Footer-div">

            <h1>Chill & Thrill Creamery</h1>
            <div className="footer-grid-div">
                <div className="Quick-Links">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Flavours</li>
                    <li>Shop</li>
                </div>

                <div className="info-div">
                    <p>Scoops of Joy in Every Cone Made Fresh, Just for You Where Flavor Meets Happiness</p>
                </div>
                
                <form>
                    <p>Contact Us</p>
                    <input type="text" placeholder="Enter Your Email" /> <br/>
                    <input className="second-input" type="text"  placeholder="Your Message"/>
                </form>
            </div>
        
        </div>
    )
}

export default Footer;