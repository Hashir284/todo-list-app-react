import './App.css';
import { useState } from 'react';
import Tr from './component/tr';

function App() {
  const [task, stask] = useState('')
  const [arr, sarr] = useState([])

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={(e)=>{
        e.preventDefault()
        sarr([...arr, task])
        console.log(arr);
        
      }}>
    <div>
      <input type="text" placeholder='Add your task' onChange={(e)=>{
        console.log(e);
        stask(e.target.value)
      }}/>
      <button>Add</button>
    </div>
      </form>

      <table>
        {
          arr.map((e)=>{
            return <Tr task={e}/>
          })
        }        
      </table>

    </div>
  );
}

export default App;