import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numsLAllowed,setNumsAllowed]=useState(false);
  const [charLAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("")

  // useCallback(function,dependencies) - we can pass arrow function of in place of function

  const passwordGenerator = useCallback(()=>{
    let pass= ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str+= "0123456789"
    if(charLAllowed) str+= "!@#$%^&*()"

    for(let i=1;i<=str.length();i++){
      let charac =Math.floor(Math.random()*str.length()+1);

      pass=str.chaarAt(charac);
    }

    setPassword(pass)
    
  },[lenght,numsLAllowed,charLAllowed,setPassword])

  return (
    <>
     <h1 className='text-4xl text-center'> 
      Password Generator
     </h1>
    </>
  )
}

export default App
