import "./App.css";
import { createSlice } from "@reduxjs/toolkit";

function App2() {
  const counterSlice = createSlice({
    name: `counter`,
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

  return (
    <div>
      <div>흑묘테크 카운터</div>
      <div>with redux-toolkit</div>
      <div id="container">
        <button id="plusButton">+</button>
        <div id="value"></div>
        <button id="minusButton">-</button>
      </div>
    </div>
  );
}

export default App2;
