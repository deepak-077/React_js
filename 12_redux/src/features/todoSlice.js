import { createSlice, nanoid } from "@reduxjs/toolkit";

// nano id generates unique ids

// declaring initial state as objects to it can have multiple properties

const initialState ={
    todos:[{
        id:1,
        text:"hello world"
    }]
}

export const todoSlice =createSlice({
    name:'todo',
    initialState,

    // Reducers - it is a functionality. It contains properties and functions

    reducers:{
        // addTodo will have access to 2 things 
        // State - it tells us about the current state
        // Action - it provide data passed
        addTodo: (state, action) =>{
            const todo ={
                id:nanoid(),
                // passing whatever was passed in text
                text:action.payload
            }
            // state is preserved by default, we don't have to spread 
            state.todos.push(todo)
        },
        removeTodo: (state,action) =>{
            // applying filter to remove the id that matches with one we get from action
            state.todos = state.todos.filter((todo) => todo.id!==action.payload)

        },

        // this differentiates reducers from ContextApi - In context Api we only write functions and not its definition
    }
})

// we will update state with the help of reducers, so exporting them

export const {addTodo,removeTodo} =todoSlice.action

// it will only update with the help of registered reducers so giving it a list of all reducers

export default todoSlice.reducer


