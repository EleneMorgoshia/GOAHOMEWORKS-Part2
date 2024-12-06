import './main.css'


function Card(props){
    console.log(props)
    return(
        <div key = {props.key}  style={{backgroundColor:'black' , display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}> {/* div-ის გარეშე რატომ არ მუშაობს?(ანუ პირდაპირ ელემენტები,h1,p რატომ აწითლებს?) */}
            <h1>{props.title}</h1> {/*title,image,price - ამათ  იმის მიხედვით ვარქმევთ,რასაც appში დავუწერთ ცვლადს სახელს(რომ მივანიჭეთ {} ით მნიშვნელობები )*/}
            <img src={props.image} alt="" />
            <p>{props.price}</p>
        </div>
    )
}

export default Card
