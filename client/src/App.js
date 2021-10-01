import './App.css';
import Products from './Products';
import CatalogProvider from './CatalogContext';
import Cart from './Cart';
import CartProvider from './CartContext';
import Input from './Input';
// import Search
//   // , { InputTest }
//   from './Search';
import { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from 'styled-components';



const Header = styled.header`
        background-color: black;
        position: sticky;`

// function reducer(state, action) {
//   if (action.type === "plus")
//     return { count: state.count + 1 }
//   return { count: state.count - 1 }
// }


function App() {
  // const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <Router>
      <CatalogProvider>
        <CartProvider>
          {/* <InputTest /> */}
          <Switch>
            <Route path='/cart'>
              <Cart />
            </Route>
            <Route path='/addProduct'>
              <Input />
            </Route>
            <Route path='/'  >
              <div id="myApp">
                {/* <button onClick={() => dispatch({ type: 'minus' })}>-</button>

                <h1>{state.count}</h1>
                <button onClick={() => dispatch({ type: 'plus' })}>+</button> */}
                <Products />
              </div>
            </Route>
          </Switch>
        </CartProvider>
      </CatalogProvider>
    </Router>
  );
}
export default App;
