import React, { useRef, useState, useEffect } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems' // Importing the Todoitems component to render individual todo items

 

const Todo = () => {

  const[todos, setTodos] = useState(localStorage.getItem ('todos') ? JSON.parse(localStorage.getItem('todos')) :[] ); // State to hold the list of todos

  const inputRef = useRef();

  const add = () => {
    // Function to add a new task
    const inputText= inputRef.current.value.trim();

    if(inputText === '') return; // If input is empty, do nothing
    const newTodo = {
      id : Date.now(), // Unique ID for each todo
      text: inputText,
      isComplete: false // Initial state of the todo

    }
    setTodos( (prev) =>[...prev, newTodo]); // Update the todos state with the new todo
    inputRef.current.value = ''; // Clear the input field after adding the todo
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo])); // Save the updated todos to localStorage
    
  }

  const deleteTodo = (id) => {
      // Function to delete a todo by its ID
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }

  const toggleComplete = (id) => {
    // Function to toggle the completion status of a todo
    setTodos((prev) => 
      prev.map((todo) => 
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  }

  useEffect(() => {
    // Load todos from localStorage when the component mounts
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[500px] rounded-xl'>
        {/* -----title-----*/}
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon} alt="" />
            <h1 className='text-3xl'>To-do list</h1>
        </div>
      {/* -----input box-----*/}
      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'

          type="text" 
          placeholder='Add a new task' 
          
        />
        <button onClick= {add}  className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
      </div>

      {/* -----to-do list-----*/}
      <div>
        {todos.map((item,index)=>{
          return <Todoitems key={item.id} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggleComplete={toggleComplete}/>
          // Render each todo item using the todoitems component
        })}
         
        {/* Render each todo item using the todoitems component */}

        {/* Example static items, can be removed or replaced with dynamic items */}
       {/*  <todoitems text= "learn coding"/>
        <todoitems text= "learn physics"/> */}

      </div>
    </div>
  )
}

export default Todo
