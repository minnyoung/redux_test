import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

const reducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case "plus":
      return { ...state, value: state.value + 1 };
    case "minus":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export const store = createStore(reducer);

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);

  function plus() {
    dispatch({ type: "plus" });
  }

  function minus() {
    dispatch({ type: "minus" });
  }

  return (
    <div>
      <div>흑묘테크 카운터</div>
      <div id="container">
        <button id="plusButton" onClick={plus}>
          +
        </button>
        <div id="value">{value}</div>
        <button id="minusButton" onClick={minus}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
