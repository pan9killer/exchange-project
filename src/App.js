import { useEffect, useState } from "react";
import './App.css';

function App() {
  const[from, setFrom] = useState(1);
  const[to, setTo] = useState();
  const[result, setResult] = useState();


  useEffect(()=>{
    fetch(`https://api.exchangerate.host/convert?from=USD&to=BYN&places=2&amount=${from}`)
      .then(res => res.json())
      .then(data => (setFrom(data.query.amount), setTo(data.result), setResult(data.result)))
  }, [])
  
  useEffect(()=>{
    let onChangeTo = result * from;
    setTo(onChangeTo.toString())
  }, [from])

  const handleChange = (event)=> {
    setFrom(event.target.value);
  }

  return (
    <div className="App">
      <input type="number" min="1" value={from} onChange={handleChange}/>
      <div>=</div>
      <input type="text" value={to}/>
    </div>
  );
}

export default App;
