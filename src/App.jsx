import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset} from "./counterSlice";

function App() {
  const count = useSelector(
    (state) => state.counter.value
  );

  const dispatch = useDispatch();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1>Redux Counter</h1>

      <h2>{count}</h2>

      <button
        onClick={() => dispatch(decrement())}
      >
        -
      </button>

      <button
        onClick={() => dispatch(increment())}
        style={{ margin: "0 10px" }}
      >
        +
      </button>

      <button
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
}

export default App;