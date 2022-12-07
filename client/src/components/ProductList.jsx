import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

const ProductList = (props) => {
const {product, setProduct} = props;
    useEffect(() => {
        
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    return (
        <div>
            {
                product.map((product, _id)=>{
                    return (<div key={_id}>
                        {product.title},
                        {product.price}, 
                        {product.descript}
                        <Link to={`/products/${product._id}`}>{product.title} Info</Link>
                        </div>
                )})
            }
        </div>
    )
}

export default ProductList;