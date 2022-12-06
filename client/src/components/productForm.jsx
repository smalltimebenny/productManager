import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = () =>{

const [title, setTitle] = useState("");
const [price, setPrice] = useState("");
const [descript, setDescript] = useState("");

const productAddForm = (e) => {
	e.preventDefault();
	axios.post("http://localhost:8000/api/products", {
		title,
		price,
		descript,
	})
	.then ( res => {
		console.log(res);
		console.log(res.data);
	})
	.catch (err => console.log({message: "The error is in the form.", error: err}))
	// setPrice("");
	// setTitle("");
	// setDescript("");
};

	return (
		<form onSubmit={productAddForm}>
			<label>Title:</label>
			<input type="text" onChange={ (e) => setTitle(e.target.value)} />
			<label>Price:</label>
			<input type="number" onChange={ (e) => setPrice(e.target.value)} />
			<label>Description:</label>
			<input type="text" onChange={ (e) => setDescript(e.target.value)} />
			<input type="submit" value="Add Product" />
		</form>
	)

}
export default ProductForm