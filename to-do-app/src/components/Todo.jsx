import React from 'react'
import todo_icon from '../assets/todo_icon.png'
 

const Todo = () => {
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-height-[500px] rounded-xl'>
        {/* -----title-----*/}
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon} alt="" />
            <h1 className='text 3xl'>To-do list</h1>
        </div>
      {/* -----input box-----*/}
      <div className='flex items-center my-7 bg-grey-200 rounded full'>
        <input className='bg-transparent boarder-0 outline-none '
          type="text" 
          placeholder='Add a new task' 
          
        />
        <button>ADD +</button>
      </div>
    </div>
  )
}

export default Todo
