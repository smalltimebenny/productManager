import {useState, useEffect} from "react"
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
                    return <p key={_id}>{product.title},{product.price}, {product.descript}</p>
                })
            }
        </div>
    )
}

export default ProductList;