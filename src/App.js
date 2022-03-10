
import React,{useState} from "react";
import ToDoList from './MyComponents/ToDoList';
const App=()=>{
  
  const [inputList,setInputList]=useState("");
  const [items, setItems]=useState([]);
  
  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };
  const addItem=(event)=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputList('')
  };
  const deleteItem=(id)=>{
    console.log("Deleted")
    setItems((oldItems)=>{
      return oldItems.filter((arrElement,index)=>{
        return index !==id;
      });
});
};
  return (<>
        <div className="main_div">
            <div className="center_div">
              <br/>
              <h1> ToDo List</h1>
              <br/>
              <input type="text" placeholder="Add a Items" value={inputList} onChange={itemEvent}/>
              <button onClick={addItem}> + </button>

              <ol>
                 {  items.map( (itemval,index) => {
                                  return <ToDoList
                                           key={index} 
                                           id={index} 
                                           text={itemval}
                                           onSelect={deleteItem}
                                           />
                       } ) }

              </ol>
            </div>  
          
        </div>

  </>)
}
export default App;















































// // This file contain all parent component. When page is call, this file is executed. This file call all the component like header,todo, todoitems,footer from App(). All this component we write in separately as .js file

// // import logo from './logo.svg';
// import './App.css';
// import Header from "./MyComponents/Header";
// import { Footer } from "./MyComponents/Footer";
// import { ToDos } from "./MyComponents/ToDos";
// import { AddTodo } from "./MyComponents/AddTodo";
// import { ToDoItems } from "./MyComponents/ToDoItems";
// import { About } from "./MyComponents/About";

// import React, { useState, useEffect } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom"
// function App() {
//   let initTodo;
//   if (localStorage.getItem("todos") === null) {
//     initTodo = [];
//   }
//   else {
//     initTodo = JSON.parse(localStorage.getItem("todos"));
//   }
//   const onDelete = (todo) => {
//     console.log("I am ondelete of todo", todo);
//     setTodos(todos.filter((e) => {
//       return e !== todo;
//     }));
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }
//   const addTodo = (title, desc) => {
//     console.log(" Adding to the list", title, desc);
//     let sno;
//     if (todos.length === 0) {
//       sno = 0;
//     }
//     else {
//       sno = todos[todos.lenght - 1].sno + 1
//     }

//     const myTodo = {
//       sno: sno,
//       title: title,
//       desc: desc,
//     }
//     setTodos([...todos, myTodo])
//     console.log(myTodo)

//   }
//   const [todos, setTodos] = useState(initTodo);
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos])
//   return (
//     <>
//       <Router>
//         <Header title="My Todo's List" searchBar={false} />
//         <Routes>
//           <Route exact path="/" render={() => {
//             return (
//               <>
//                 <AddTodo addTodo={addTodo} />
//                 <ToDos todos={todos} onDelete={onDelete} />
//               </>)
//           }}>
//           </Route>
//           <Route exact path="/about">
//             <About />
//           </Route>
//         </Routes>
//         <Footer />
//       </Router>
//     </>

//   );
// }

// export default App;
