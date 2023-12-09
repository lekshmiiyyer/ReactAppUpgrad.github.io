import Product from "./Product";

function Products(){

    let products=[
        {id:1,name: "Levis Jeans", price:"2000 Rs", url:"https://rukminim2.flixcart.com/image/850/1000/xif0q/jean/r/5/x/32-18298-1232-levi-s-original-imagjyczhh6qz2vx.jpeg?q=90"},
        {id:2,name:"Samsung M51", price:"24000 RS", url:"https://m.media-amazon.com/images/I/61w7yajgNML.jpg"},
        {id:3,name:"Dell Monitor" ,price:"100000 RS" ,url:"https://multimedia.bbycastatic.ca/multimedia/products/500x500/171/17154/17154911_3.jpeg"}

    ]

return(<div className='products'>
{
//map runs 3 times on the array products using obj product
products.map((product)=>{
    return(
        <Product name={product.name} price={product.price} url={product.url} key={product.id}/>
    )
})



}
</div>)
    
}
export default Products;


