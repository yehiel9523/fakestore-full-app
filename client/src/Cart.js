import Product from "./Product";
import { useContext } from "react"
import { CartContext } from "./CartContext"
import { ButtonCart } from "./Products";
import {
    Link,
} from "react-router-dom";

export default function Cart() {
    const { cart } = useContext(CartContext);
    return (
        <div className='cart'>
            <div className='route'>
                <Link to={`/`}><ButtonCart> Home</ButtonCart></Link>
            </div>
            {cart.length > 0 ? cart.map(product => <Product{...product} />)
                : null}
        </div>

    )
}