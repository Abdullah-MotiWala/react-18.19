import { createStore } from "redux";
import reducer from "./reducer"
import storageModule from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const storage = storageModule.default || storageModule;

console.log("storage:", storage);

const config = { storage, key: "root" }

const persistedReducer = persistReducer(config, reducer)

const store = createStore(persistedReducer)
const persistedStore = persistStore(store)
export { store, persistedStore }