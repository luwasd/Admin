import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = () => {
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: ""
    })

    const { title, price, description } = product;

    const handleChange = (e) => { // This is a controlled form, so we need to handle the change event
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault(); // Prevents the page from refreshing

        // Make a post request to create a new person
        axios.post('http://localhost:8000/api/product', product)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        // Reset the form
        setProduct({
            title: "",
            price: 0,
            description: ""
        })
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title </label>
                <input type="text" name='title' onChange={handleChange} value={title} />
            </p>
            <p>
                <label>Price </label>
                <input type="number" name='price' onChange={handleChange} value={price} />
            </p>
            <p>
                <label>Description </label>
                <input type="text" name='description' onChange={handleChange} value={description} />
            </p>
            <input type="submit" />
        </form>
    )
}

export default ProductForm