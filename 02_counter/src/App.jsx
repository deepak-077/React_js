import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)

  //we can pass any thing as default in useState("")/useState(true)/useState("helo")/useState({object})/
  // it returns 2 things in array format so we are storing it as array
  //  0th index- counter(value),  1st index- setCounter(function). setCounter method control / update counter variable
  // its a naming convention to use time, setTime
  // let counter=15;
  
  let addValue=function(){
    console.log("value added",counter)
    counter++;
    setCounter(counter)
    setCounter(counter)
    setCounter(counter)
    // ---------------------------- Interview Question ---------------------
    //ADD button will increase the counter by 1 because React uses bundler approach - fibre (bundling the tasks that are doing same thing and updating once)
    
    // if we want it to update the previous counter we can write it as 
    // setCounter(counter =counter+1) - it will execute only when it gets ans from its previous calls
    // setCounter is a function so we can write a callback function in it


    // counter is changing in console but its not updating in the html page
    // UI is controlled by react and it provides the functionality of hooks for UI updation
    // there are many hooks for various purposes
    // they are imported in the {useState} 

    // useState- its responsible for propagating variable updation in UI / DOM, 
    // it will update it in the entire page where counter is used

  }

  let removeValue=function(){
    
    if(counter==0){
      
    }
    else{
      setCounter(counter--)

    }
    
    
    
  }

  

  return (
    <>
      <h1> MacBook Air</h1>
      <h2> Counter Value : {counter}</h2>

      <button onClick={addValue}> Add Value {counter}</button>
      {/* we are just passing reference because we want it to work only when clicked */}
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
