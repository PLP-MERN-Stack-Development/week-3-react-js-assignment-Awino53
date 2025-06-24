import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const todoitems = ({text, id, isComplete, deleteTodo, toggleComplete}) => {
  return (
    <div className='flex-items-center my-3 gap-2'>
        <div onClick={() =>{toggleComplete(id)}}      className='flex flex-1 items-center cursor-pointer'>
            <img src= {isComplete ? tick : not_tick} alt="" className='w-7'/>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}> {text}</p>
        </div>
        <img onClick={()=>{deleteTodo (id)}}   src={delete_icon} alt="" className='w-3.5 cursor-pointer'/>
      
    </div>
  )
}

export default todoitems

// This component renders individual todo items with a checkbox and delete button
// It receives props for the todo text, id, completion status, and functions to delete or toggle the todo's completion status
// The checkbox toggles the completion status when clicked, and the delete button removes the todo item