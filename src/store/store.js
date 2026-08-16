// import { createStore } from "redux";
// import reducer, { countReducer } from "./reducer"
// import storageModule from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";

import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counter";
import { cartReducer } from "./slice/cart";

// import { createStore } from "redux";
// import { cartReducer } from "./reducer";

// import { configureStore } from "@reduxjs/toolkit";
// import { counterReducer } from "./slice/counter";
// import { useReducer } from "react";

// const storage = storageModule.default || storageModule;

// console.log("storage:", storage);

// const config = { storage, key: "root" }

// const persistedReducer = persistReducer(config, reducer)

// const store = createStore(persistedReducer)
// const persistedStore = persistStore(store)
// export { store, persistedStore }

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     // user:useReducer
//   },
// });

// export const store = createStore(cartReducer)
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    counter: counterReducer,
  },
});
