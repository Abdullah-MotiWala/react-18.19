import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Layout from "./Layout";
import IncreaseCounter from "./increaseCounter";
import { useDispatch, useSelector } from "react-redux";
import DecreaseCounter from "./decreaseCounter";
import ManualCounter from "./manualCounter";
import ClearCart from "./clearCart";
import AddCart from "./addCart";
import { CART_REMOVE } from "./store/constants";
import { remove } from "./store/actions";
import { removeCart } from "./store/slice/cart";
import { useCounter } from "./store/zustand/counter";

function App() {
  const zustandValues = useCounter()
  console.log(zustandValues,"===zustand vlue")
  const dispatch = useDispatch();
  const state = useSelector(function (state) {
    return state;
  });

  console.log(state,"===state")

  function handleDelete(id) {
    dispatch(removeCart(id));
  }
  return (
    <>
      <Layout>
        <p>Zustand count</p>
        <p>{zustandValues.count}</p>
        <button onClick={()=>{
          zustandValues.increment()
        }}>update</button>
        {state.cart.cartItems.map((item) => (
          <div id={item.id}>
            <span>{item.id}</span>
            <span>{item.name}</span>
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
        <ClearCart />
        <AddCart />
        <p>{state.counter.value}</p>
        <IncreaseCounter />
        <DecreaseCounter />
        <ManualCounter />
      </Layout>
    </>
  );
}

export default App;
