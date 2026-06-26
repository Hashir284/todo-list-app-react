import "./App.css";
import {  useState } from "react";
import Tr from "./component/tr";

function App() {
  const [task, stask] = useState("");
  const [arr, sarr] = useState([]); 
  const [editIndex, setEditIndex] = useState(null)

  const addTodo = (e) => {
          e.preventDefault();

          if(editIndex === null){
            if (task !== "") {
            const newtask = {
              id: Date.now(),
              text:task,
              boolean: false,
            };
            sarr([...arr, newtask]);
            stask("");
          } else {
            alert("Please! Enter the task");
          }
        }

        else{
          sarr(arr.map((e, i)=>{
            if (i != editIndex) {
              return e
            }
            else{
              return {id:arr[i].id, boolean:arr[i].boolean, text:task}
            }
          }))
        }

        stask('')
        setEditIndex(null)
          }



  const edit = (i) =>{
    console.log(arr[i].text);
    
    stask(arr[i].text)
    setEditIndex(i)
    // addTodo()
  }
  
  const completed = (boolean, id) => {
    const updatedArr = arr.map((e) => {
      if (e.id === id) {
        return { ...e, boolean };
      }
      return e;
    });

    sarr(updatedArr);
  };

  const del = (index) => {
    let filteredArray = arr.filter((e, i) => {
      return i !== index;
    });
    sarr(filteredArray);
  };

  const pendingTask = arr.filter((e) => !e.boolean).length;
  return (
    <div className="App">
      <h1>To-Do List</h1>

      <form
        onSubmit={addTodo}
      >
        <div className="asker">
          <input
            type="text"
            placeholder="Add your task"
            value={task}
            className="input"
            onChange={(e) => {
              if (e.target.value !== "") {
                stask(e.target.value);
              }
              if (e.target.value === "") {
                stask("");
              }
            }}
          />
          <button className="add-btn">
            {
              editIndex === null ? 
              'Add' : 'Edit'
            }
          </button>
        </div>
      </form>

      <table>
        <tbody>
          {arr.map((e, i) => {
          return (
            <Tr
              task={e.text}
              key={e.id}
              del={del}
              index={e.id}
              i={i}
              completed={completed}
              edit={edit}
            />
          );
        })}
        </tbody>
      </table>
        <div className="pending">
          <h3>You have {pendingTask} pending Tasks</h3>
          <button
            onClick={() => {
              sarr([]);
            }}
          >
            Clear all
          </button>
        </div>
    </div>
  );
}

export default App;
