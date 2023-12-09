import { useState } from "react";

function Product(props){

    let[isAvailable,setIsAvailable]=useState("yes")
    
    return(
<div className="product">
    {/* using object properties in componenet 
    and map values as given ijn app.js */}
    <img className="img" src={props.url}/>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <p>{isAvailable}</p>

        <button onClick={()=>{
            setIsAvailable("no")
            }}>Click</button>

</div>


    )
}
export default Product;