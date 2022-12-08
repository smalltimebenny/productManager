import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'


const Update = (props) => {
	const {id} = useParams();
	const [title, setTitle] = useState("")
	const [price, setPrice] = useState("")
	const [descript, setDescript] = useState("")

	const navigate = useNavigate();

	useEffect(() => {
		axios.get("http://localhost:8000/api/products/" + id)
			.then(res => {
				setTitle(res.data.title)
				setPrice(res.data.price)
				setDescript(res.data.descript)
			})
		.catch(err => console.log("update.jsx get error",err))
	}, [id])

	const updateProduct1 = (e) => {
		e.preventDefault();
		axios.put("http://localhost:8000/api/products/" + id, {
			title,
			price,
			descript,
		})
			.then(res => {
				console.log(res);
				navigate("/products")
			})
			.catch(err => console.log("updateProduct1 error", err))
	}

	return (
		<div>
			<h1>Update a product</h1>
			<form onSubmit={updateProduct1}>
				<p>
					<label>Title</label>
					<input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}} />
					<label>Price</label>
					<input type="number" name="price" value={price} onChange={(e) => {setPrice(e.target.value)}} />
					<label>Description</label>
					<input type="text" name="descript" value={descript} onChange={(e) => {setDescript(e.target.value)}} />
					<input type="submit" />
				</p>
			</form>
		</div>
	)
}	

export default Update;