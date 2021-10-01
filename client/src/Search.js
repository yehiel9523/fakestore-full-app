import { useRef, useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { CatalogContext } from './CatalogContext';
import { ButtonCart } from './Products'
function Search() {
    const { setProducts } = useContext(CatalogContext);
    const titleRef = useRef();
    const [on, setOn] = useState(false)
    useEffect(() => {
        fetch(`/products?title=${titleRef.current.value}`)
            .then(res => res.json())
            .then(data => setProducts(data));
        setOn(false)
    }, [on])

    return (
        <>
            <form className='search' action='#                                        '>
                <input ref={titleRef} title='title' placeholder='Search for something' />
                <ButtonCart onClick={() => setOn(true)} type='submit'>search</ButtonCart>
            </form>
        </>

    )
}
// export function InputTest() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     // const [text, setText] = useState('')
//     // const textRef = useRef();
//     // const setTextFun = () => {
//     //     setText(textRef.current.value)
//     // }
//     // console.log(text)
//     // const validat = () => {
//     //     if (text.includes('@'))
//     //         return true
//     //     return false
//     // }
//     const onSubmit = data => console.log(data);

//     return (
//         <form onSubmit={handleSubmit(onSubmit)} >
//             <input
//                 // ref={textRef}
//                 type='email'
//                 // value={text}
//                 // onChange={setTextFun}
//                 {...register("emeil", { pattern: /\@/i })}
//             >
//             </input>
//             <input type="submit" />

//             {/* <button disabled={!validat() ? true : false} onClick={() => setText('')} >submit</button> */}
//         </form>

//     )

// }

export default Search;