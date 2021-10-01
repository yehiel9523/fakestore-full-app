// import './Product.css';
import { CatalogContext } from './CatalogContext';
import { useContext } from 'react';
import { useEffect, useState } from "react";
import Product from './Product';
import Search from './Search';

import {
    Link,
} from "react-router-dom";
import styled from 'styled-components';
export const ButtonCart = styled.button`
        height: 50px;
        width: 100px;
        margin:30px;
        background-color: white;
        border-radius:5px;
        border-style: none;
        position: relative;

        `;

function Products() {

    const { products } = useContext(CatalogContext);
    // console.log(typeof products[0]._id);
    return (
        <div className="products">
            <div className='route'>
                <Link to={`/cart`}><ButtonCart> The Cart</ButtonCart></Link>
                <Link to={`/addProduct`}><ButtonCart> Add Product</ButtonCart></Link>
                <Search />
            </div>

            {Array.isArray(products) && products.length > 0 ?
                products.map(product => <Product {...product} />)
                : 'louding...'}
        </div>
    )

}
export default Products;
