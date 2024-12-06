function Card(props){
    return(
        <div key = {props.key}>
            <h1>{props.title}</h1>
            <img src={props.image} />
            <p>{props.price}</p>
        </div>
    )
}


export default Card;