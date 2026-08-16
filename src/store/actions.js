// import { DECREMENT, INCREMENT, MANUAL } from "./constants";

import { CART_REMOVE } from "./constants";

// export const Increment = { type: INCREMENT }
// export const Decrement = { type: DECREMENT }
// export const Manual = (value) => ({ type: MANUAL, value })

export const remove = (payload) => ({ type: CART_REMOVE, payload });
