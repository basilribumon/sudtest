import { useDispatch,useSelector } from "react-redux";
import { increment,decrement,reset } from "./counterSlice";

function App(){
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();


  return(
    <div style={{textAlign:"center"}}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button style={{color:"Green"}} onClick={()=>dispatch(increment())}>increment</button>
      <button style={{color:"Red"}} onClick={()=>dispatch(decrement())}>decrement</button>
      <button style={{color:"blue"}} onClick={()=>dispatch(reset())}>reset</button>

    </div>
  );
};

export default App;