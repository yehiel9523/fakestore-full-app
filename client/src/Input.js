import { Link } from 'react-router-dom';
import { ButtonCart } from './Products';
import { useEffect, useRef, useState, useRouteMatch } from "react";



function Input() {
    const idRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();



    const addProduct = () => {
        const data = {
            id: idRef.current.value,
            title: titleRef.current.value,
            price: priceRef.current.value,
            image: imageRef.current.value
        };
        fetch('/products', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        console.log(data)
    }
    const deleteProduct = () => {
        const data = {
            id: idRef.current.value,
            title: titleRef.current.value,
            price: priceRef.current.value,
            image: imageRef.current.value
        };

        fetch(`/products/ ${data.id}`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        console.log(data)

    }
    const editProduct = () => {
        const data = {
            id: idRef.current.value,
            title: titleRef.current.value,
            price: priceRef.current.value,
            image: imageRef.current.value
        };
        if (data.id) {
            fetch(`/products/ ${data.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
            console.log(data)
        }
        else console.log('fall')
    }

    return (
        <>
            <div className='route'>
                <Link to={`/`}><ButtonCart> Home</ButtonCart></Link>
            </div>
            <form className="input" >
                {/* <input ref={idRef} title='id' placeholder='Id' /> */}
                <input ref={titleRef} title='title' placeholder='Title' />
                <input ref={priceRef} title="price" placeholder='Price' />
                <input ref={imageRef} title='imageURL' placeholder='ImageURL' />
                <button onClick={() => addProduct()}>Add</button>
                {/* <button onClick={() => deleteProduct()}>Delete</button>
                <button onClick={() => editProduct()}>Edit</button> */}
            </form>
        </>
    )
}
export default Input;