 import React from 'react'
 import Todo from './components/Todo'
 
 const App = () => {
   return (

     <div className='bg-neutral-800 grid py-10 px-4 min-h-screen'>
      <div className="text-red-500 text-2xl font-bold">Tailwind is working!</div>

        <h1>Todo App</h1>
        <Todo />  
     </div>

     
   )
 }
 
 export default App
 