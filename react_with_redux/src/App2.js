import "./App.css";
import { createSlice, configureStore, createAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const counterSlice = createSlice({
  name: `BRCounter`,
  initialState: { value: 0 },
  reducers: {
    // plus: (state, action) => {
    //   state.value += 1;
    // },
    // minus: (state, action) => {
    //   state.value -= 1;
    // },
    plus: (state, action) => {
      state.value += action.payload;
    },
    minus: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

function App2() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  //   function plus() {
  //     dispatch(counterSlice.actions.plus());
  //   }
  //   function minus() {
  //     dispatch(counterSlice.actions.minus());
  //   }

  const plusAction = createAction("BRCounter/plus");
  const minusAction = createAction("BRCounter/minus");

  function plus() {
    dispatch(plusAction(2));
  }
  function minus() {
    dispatch(minusAction(2));
  }
  return (
    <div>
      <div>흑묘테크 카운터</div>
      <div>with redux-toolkit</div>
      <div id="container">
        <button id="plusButton" onClick={plus}>
          +
        </button>
        <div id="value">{count}</div>
        <button id="minusButton" onClick={minus}>
          -
        </button>
      </div>
    </div>
  );
}

export default App2;
