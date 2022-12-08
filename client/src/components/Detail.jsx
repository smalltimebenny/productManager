import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


const Detail = (props) => {
	const [product, setProduct] = useState("")
	const {id} =useParams();
	// console.log("top")
	// console.log(product)
	useEffect(() => {
		
		axios.get("http://localhost:8000/api/products/" + id)
			.then (res => {
				console.log(res.data)
				setProduct(res.data)
			})
			.catch( err => console.log("promise error", err))
	}, [])
// console.log("middle",product)
	return (
		<div>
			<p>Title: {product.title}</p>
			<p>Price: {product.price}</p>
			<p>Description: {product.descript}</p>
		</div>
	)
}

export default Detail