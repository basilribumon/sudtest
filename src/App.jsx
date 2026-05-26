import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,reset } from "./counterSlice";

function App(){
const count = useSelector((state)=>state.counter.value)
const dispatch = useDispatch();

return (
 <div style={{textAlign:"center",marginTop:"50px"}}>
  <h1>counter app</h1>
  <h2>{count}</h2>
  <button onClick={()=>dispatch(increment())}>Add</button>
  <button onClick={()=>dispatch(decrement())}>Min</button>
  <button onClick={()=>dispatch(reset())}>reset</button>


 </div>
)
};
export default App;
