import { combineReducers } from "redux";
import { DECREMENT, INCREMENT, MANUAL } from "./constants";

const countInitialState = {
  value: 1,
};
const userInitialState = {
  info: {},
};

export const countReducer = (state = countInitialState, { type, value }) => {
  console.log("===running");

  switch (type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };

    case DECREMENT:
      return { ...state, value: state.value - 1 };

    case MANUAL:
      return { ...state, value: state.value + value };

    default:
      return state;

    // case "ENTERY":
    //     return initialState
  }
};

const userReducer = (state = userInitialState, { type, value }) => {
  console.log("===running");

  switch (type) {
    case "INCREMENTs":
      return { ...state, count: state.count + 1 };

    case "DECREMENTs":
      return { ...state, count: state.count - 1 };

    case "MANUALs":
      return { ...state, count: state.count + value };

    default:
      return state;

    // case "ENTERY":
    //     return initialState
  }
};

const reducer = combineReducers({
  user: userReducer,
  count: countReducer,
});


export default reducer;

// export { countReducer, userReducer }
