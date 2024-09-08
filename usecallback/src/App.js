import './App.css';
import { useState,useCallback } from 'react';
import Heading from './Heading';
import Child from './Child';

function App() {
  const [count,setcount]=useState(0);
    const clickHandler=()=>{
        setcount(prev=>prev+1);
    }
    const [data, setData] = useState([
      'Mango',
      'Banana',
  ]);
  const [submittedData, setSubmittedData] = useState(["Apple","Lichi"]);

  const handleSubmit = useCallback(() => {
      setData([...data,...submittedData])
  },[data])
  return (
    <div className="App">
      <Heading />
      <Child data={data} submitevent={handleSubmit} />
      <div>
            <h3>Counter Component</h3>
            <h4>{count}</h4>
            <button onClick={clickHandler}>Increment</button>
        </div>
    </div>
  );
}
export default App;