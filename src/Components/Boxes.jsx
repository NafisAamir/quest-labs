import React, { useState } from "react";
import BoxCss from "./BoxCss.css"

const Boxes = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [card, setCard] = useState([]);
  const [newCard, setNewCard] = useState("");
  const [work, setWork] = useState([]);
  const [newWork, setNewWork] = useState("");
  const [list, setList] = useState([]);
  const [newList, setNewList] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTask([...task, newTask]);
      setNewTask("");
    }
  };

  const handleAddCard = () => {
    if (newCard.trim() !== "") {
      setCard([...card, newCard]);
      setNewCard("");
    }
  };

  const handleAddWork = () => {
    if (newWork.trim() !== "") {
      setWork([...work, newWork]);
      setNewWork("");
    }
  };

  const handleAddList = () => {
    if (newList.trim() !== "") {
      setList([...list, newList]);
      setNewList("");
    }
  };

  return (
    <div className="main" style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={{ boxShadow: "0 0 10px black", width: "18%", backgroundColor: "white" }}>
        {todos.map((todo, index) => {
          return <div key={index} style={{ backgroundColor: "white", margin: "5px" }}>
            {todo}
          </div>
            })}
        <input
          type="text"
          placeholder="Add New Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div style={{ boxShadow: "0 0 10px black", width: "18%", backgroundColor: "white" }}>
        {task.map((task, index) => {
         return  <div key={index} style={{ backgroundColor: "white", margin: "5px" }}>
            {task}
          </div>
        })}
        <input
          type="text"
          placeholder="Add New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>+Add New Task</button>
      </div>
      <div style={{ boxShadow: "0 0 10px black", width: "18%", backgroundColor: "white" }}>
        {card.map((card, index) => {
          return <div key={index} style={{ backgroundColor: "white", margin: "5px" }}>
            {card}
          </div>
        })}
        <input
          type="text"
          placeholder="Add New Card"
          value={newCard}
          onChange={(e) => setNewCard(e.target.value)}
        />
        <button onClick={handleAddCard}>Add New Card</button>
      </div>
      <div style={{ boxShadow: "0 0 10px black", width: "18%", backgroundColor: "white" }}>
        {work.map((work, index) => {
          return <div key={index} style={{ backgroundColor: "white", margin: "5px" }}>
            {work}
          </div>
        })}
        <input
          type="text"
          placeholder="Add New Work"
          value={newWork}
          onChange={(e) => setNewWork(e.target.value)}
        />
        <button onClick={handleAddWork}>+Add New Work</button>
      </div>
      <div style={{ boxShadow: "0 0 10px black", width: "18%", backgroundColor: "white" }}>
        {list.map((list, index) => {
          return <div key={index} style={{ backgroundColor: "white", margin: "5px" }}>
            {list}
          </div>
            })}
        <input
          type="text"
          placeholder="Add New List"
          value={newList}
          onChange={(e) => setNewList(e.target.value)}
        />
        <button onClick={handleAddList}>Add New List</button>
      </div>
    </div>
  );
};

export { Boxes };
