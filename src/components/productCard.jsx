import "./ProductCard.css";
export default function ProductCard(props){


    return(
        <div>
            <img src ={props.photoUrl}></img>
            <span>J{props.name}</span>
            <span>LKR. {props.price}</span>
            <p>{props.description}</p>
              
        </div>
    )
}