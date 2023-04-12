import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList';
import axios from 'axios';
import ProductForm from '../components/ProductForm';

const Main = () => {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            });
    }, [])



    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm />
            <hr />
            {loaded && <ProductList product={product} />}
        </div>
    )
}

export default Main;