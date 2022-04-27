
import React from 'react'
const handleDelete=async()=>{
    let res=await fetch(`http://localhost:8080/todos/${"id"}`,{
        method:"DELETE",
        headers:{
            "content-type":"application/json"
        },
    })

}
const Todo = (id,value) => {
  return (
    <div>
     <h1>{value}</h1> 
     <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Todo
