// import UpdateUser from "./component/UpdateUser";
// import UserProfile from "./component/UserProfile";
// import { UserProvider } from "./UserContext";
import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };

    case "reset":
      return { ...state, count: 0 };

    default:
      break;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{marginLeft:500}}>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>

      <h1>Count: {state.count}</h1>

      <button onClick={() => dispatch({ type: "decrement" })}>-</button>

      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default App;
