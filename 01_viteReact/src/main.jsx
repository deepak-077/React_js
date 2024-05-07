import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//we can write our jsx here 
function MyApp(){
  return (
    <div>
      <h1>this is custom app !</h1>
    </div>
  )
}

//custom react 
// we can pass our custom react but it doesn't runs as it needs its own method and we are not writing according to the method of react
    
let reactElement={
  type:'a',
  props:{
      //it stores properties or attrributes in key:value pair
      href:"https//google.com",
      target:"_blank"
  },
  children: "click here to visit google"
}


//element 

const anotherElement=(
  <a href='https://google.com' target="_blank"> Link to Google</a>
)

const anotherUser=" Deepak"


//creating our own object of type React
let reactElement2=React.createElement(
  "a", //tag name
  {href:"https://google.com", target:"_blank"}, // attributes/properties 
  "click here for google" ,//text 
  anotherUser //variables are injected at last after the is made 
)



ReactDOM.createRoot(document.getElementById('root')).render(
    
    <App/>
    // <MyApp />
    //now since MyApp is a function so we can simply write it as
    // MyApp()

    // we can pass our custom react but it doesn't runs as it needs its own method and we are not writing according to the method of react
    // reactElement

    //we can pass tags simply to verify its converting to Tree Structure
    // anotherElement
    
    //calling our own react method
    // reactElement2

  
)
