import './Product.css';
import { CartContext } from './CartContext';
import { useContext, useEffect, useState } from 'react';
import { CatalogContext } from './CatalogContext';

// import Cart from './Cart';

export default function ({
    category,
    description,
    _id,
    image,
    title,
    price,

}) {
    const { cart, setCart } = useContext(CartContext);
    const [onClick, setOnclick] = useState(false);
    const [deatales, setDeatales] = useState(false);
    useEffect(() => {
        if (onClick) {
            fetch(`/products/${_id}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setCart([...cart, data])
                })
            console.log(cart)
            setOnclick('flase')
        }

    }, [onClick])
    return (
        <div className='product' >
            <h5>{title}</h5>
            <img src={image} />
            <div>{price} $</div>
            <button onClick={() => setOnclick(true)}>Add to crat </button>

        </div>
    )
}