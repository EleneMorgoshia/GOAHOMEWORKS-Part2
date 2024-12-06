import "../styles/SecondSection.css"


function Card(props){
    return(
        //დივში ჩავარდება ის ფოტო,სახელი,ინფო - რაც არის სიის ობიექტებში შეანახული
        <div className="ICE-CREAM-data-div">
            <img className="ice-cream-img" src={props.image} alt="" />
            <h1 className="ice-cream-name">{props.name}</h1>
            <p className='ice-cream-info'>{props.info}</p>
        </div>
    )
}

export default Card;