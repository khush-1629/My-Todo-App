import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import { BrowserRouter } from 'react-router-dom';

import React,{ useState , useEffect} from 'react';
import {Routes,Route,Link
  
} from "react-router-dom";



function App() {
  let initTodo;
  if ( localStorage.getItem("todos")===null){
    initTodo =[];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"))

  };
  
  const onDelete=(todo)=>{
    console.log("i am ondelete of todo", todo );
    setTodos(todos.filter((e)=>
    {return e!==todo;

    }
    ));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) =>{
    console.log("I am adding a todo", title, desc)
    let sno;
    if(todos.length==0){
      sno=0;
    
    }else{
       sno = todos[todos.length-1].sno + 1;
      
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log("myTodo");

    
    
     
    
  }



  const [todos, setTodos]=useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    
  
    
  }, [todos])
  return (
    <BrowserRouter>
      <Header title="My Todos List" searchBar={false} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
  
  
  
  
  
 
