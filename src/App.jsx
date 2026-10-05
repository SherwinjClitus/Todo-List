import { useState } from "react";
import "./App.css";

function App() {
  const [list, setlist] = useState([]);

  const [newitem, setnewitem] = useState("");

  function handleDone(removeid) {
    var templist = list.filter(function (item) {
      if (removeid == item.id) {
        return false;
      } else {
        return true;
      }
    });
    setlist(templist);
  }
  function handleChange(event) {
    setnewitem(event.target.value);
  }
  function addItem() {
    if (newitem.trim() != "") {
      setlist([...list, { id: list.length + 1, acitivity: newitem }]);
      setnewitem("");
    } else {
      alert("Enter a valid item!!");
    }
  }
  return (
    <>
      <div className="todo-container">
        <div className="todo-header">
          <h1>Todo List</h1>
        </div>
        <div className="todo-content">
          <div className="todo-input">
              {" "}
              <input
                type="text"
                value={newitem}
                placeholder="Enter a to do item"
                onChange={handleChange}
              ></input>
              {" "}
              <button className="todo-add-btn" onClick={addItem}>
                ADD
              </button>
            
          </div>
          <div className="todo-item">
          <ul>
            {list.map(function (item) {
              return (
                <li>
                  {item.acitivity}{" "}
                  <button
                    onClick={() => {
                      handleDone(item.id);
                    }}
                  >
                    DONE
                  </button>
                </li>
              );
            })}
          </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
