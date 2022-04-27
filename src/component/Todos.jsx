
import React, { useEffect } from 'react'
import { useState } from 'react';
import TodoInput from './TodoInput';
import Todo from './Todo';

const Todos = () => {
    const [todos,setTodos]=useState([]);
    useEffect(()=>{
        fetch ("http://localhost:8080/todos")
        .then((r)=>r.json())
        .then((d)=> setTodos(d));

    },[])
  return (
    <div>
      Todos:{todos.length-1}
      <div>
      <TodoInput/>
      </div>
     {todos.map(todo=> <Todo key={todo.id} {...todo}/>)}
    </div>
  )
}

export default Todos

