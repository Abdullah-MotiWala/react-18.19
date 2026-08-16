import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { CART_ADD } from "./store/constants";
import { addCart } from "./store/slice/cart";

const AddCart = () => {
  const dispatch = useDispatch();
  function handleAddCart() {
    const id = idRef.current.value;
    const name = nameRef.current.value;
    const payload = { id, name };
    dispatch(addCart(payload));
  }

  const idRef = useRef();
  const nameRef = useRef();

  return (
    <div>
      <button onClick={handleAddCart}>Add</button>
      <input type="text" placeholder="id" ref={idRef} />
      <input type="text" placeholder="name" ref={nameRef} />
    </div>
  );
};

export default AddCart;
