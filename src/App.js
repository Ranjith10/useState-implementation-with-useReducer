import React, { useReducer } from "react";
import "./styles.css";

const useState = initialValue => {
  return useReducer(useStateReducer, initialValue, useStateInitializer);
};

const useStateReducer = (prevState, dispatch) => {
  if (dispatch === "increment") {
    return prevState + 1;
  } else {
    return prevState - 1;
  }
};

const useStateInitializer = initialValue => initialValue;

export default function App() {
  const [count, setCount] = useState(0);

  //Directly set state from prevState value
  const handleCount = action => setCount(action);

  return (
    <>
      {count}
      <div
        onClick={() => handleCount("increment")}
        style={{
          border: "1px solid",
          width: 150,
          cursor: "pointer",
          background: "#B6D7A8"
        }}
      >
        Click to Increment
      </div>
      <div
        onClick={() => handleCount("decrement")}
        style={{
          border: "1px solid",
          width: 150,
          cursor: "pointer",
          background: "#F4CCCC",
          marginTop: 10
        }}
      >
        Click to Decrement
      </div>
    </>
  );
}
