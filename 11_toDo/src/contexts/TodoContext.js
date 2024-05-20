import { createContext, useContext } from 'react';
export const TodoContext =createContext({
    // every todo will have objects that will have these properties
    todos: [
        {
            id:1,
            todo:"ToDo msg",
            completed :false,
        }
    ],
    // functionalities add Todo takes a function
   //  similarly updateTodo will take id and todo
        addTodo:(todo) =>{},
        updateTodo:  (id, todo) =>{},
        deleteTodo : (id) => {},
        toggleComplete :(id) =>{}
})

export const useTodo =() => {
    return useContext(TodoContext)
}


export const TodoProvider =TodoContext.Provider