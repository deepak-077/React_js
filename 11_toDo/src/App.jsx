import { useState, useEffect } from 'react'

import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos,setTodos]= useState([])
  
  //creating the functions to pass in TodoProvider
  const addTodo =(todo) => {
    //if we directly pass setTodos(todo) then all previous values will be deleted and only new one will be there
    // spreading previous values and storing new one in object as defined in todoContext

    // date.now will create unique id's
    setTodos((prev) =>[{id:Date.now(),...todo},...prev])
  }

  // update logic passing in id and the todo to be updates if found update the prev todo else leave as it is

  const updateTodo =(id,todo) => {
    setTodos((prev) => prev.map((prevTodo) =>(prevTodo.id ===id? todo:prevTodo)))

  }

  //delete todo - deleting an element(id) from an array, using filter function for efficiency  
  
  const deleteTodo =(id) =>{
    setTodos((prev) =>prev.filter((todo)=> todo.id!==id))
  }

  // toggle check logic- go inside the object and change the completed status

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id ===id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo ))
  }

  // we are using useEffect because we want that whenever our page reloads it should show if there are any existing todos 
  
  //get item return and stores only in string format so we have to convert in JSON 

  useEffect(() =>{
    const todos =JSON.parse(localStorage.getItem("todos"))

    if ( todos && todos.length >0){
      setTodos(todos)
    }
  },[])
  // parameters should be same in get and set

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))

  },[todos])


  return (
    <TodoProvider value ={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=> (
                          <div key={todo.id}
                          className='w-full'>
                            <TodoItem todo={todo}/>

                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
