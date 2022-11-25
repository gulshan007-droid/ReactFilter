import {useState} from "react"
const array1=['prabht','durgesh','kamal','sowjanay']
function App() {
  const [arr,setArr]=useState(array1)
  const filteredItem=(e)=>{
    const filerName=array1.filter((n)=>n.includes(e.target.value))
    setArr(filerName);
    
  }
  return <div className="App">
    <input type="text" onChange={filteredItem}/>
    {arr.map((name)=><ul><li>{name}</li></ul>)}
  </div>;
}

export default App;
