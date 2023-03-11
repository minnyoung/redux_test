import "./App.css";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const counterSlice = createSlice({
  name: `BRCounter`,
  initialState: { value: 0 },
  reducers: {
    plus: (state, action) => {
      state.value += 1;
    },
    minus: (state, action) => {
      state.value -= 1;
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
  return (
    <div>
      <div>흑묘테크 카운터</div>
      <div>with redux-toolkit</div>
      <div id="container">
        <button id="plusButton">+</button>
        <div id="value">{count}</div>
        <button id="minusButton">-</button>
      </div>
    </div>
  );
}

export default App2;
