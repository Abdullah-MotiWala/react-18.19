import React from "react";
import { useDispatch } from "react-redux";
import { CART_DELETE } from "./store/constants";
import { clearCart } from "./store/slice/cart";

const ClearCart = () => {
  const dispatch = useDispatch();
  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div>
      <button onClick={handleClearCart}>Clear</button>
    </div>
  );
};

export default ClearCart;
