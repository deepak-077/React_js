import { useState, useCallback, useEffect } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numsAllowed,setNumsAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password, setPassword] = useState("")

  // useCallback(function,dependencies) - we can pass arrow function of in place of function

  const passwordGenerator = useCallback(() => {
    let pass= ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numsAllowed) str+= "0123456789"
    if(charAllowed) str+= "!@#$%^&*()"

    for(let i=1; i<= length(); i++){
      let charac =Math.floor(Math.random()*str.length()+1);

      pass+=str.charAt(charac);
    }

    setPassword(pass)
    
  },[length,numsAllowed,charAllowed,setPassword])


  // useEffect(function,dependencies) - we can pass arrow function of in place of function

  // useEffect(() => {
  //   passwordGenerator()

  // },[length,numsAllowed,charAllowed, passwordGenerator])
  

  return (
    <>
     <div className= "w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500 "> 

     <h1 className='text-white text-center my-3'> Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text" 
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      />

      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy </button>

     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={50}
        value={length}
        className='curson-pointer'
        onChange ={(e) => {setLength(e.target.value)}}   
        />
        <label > length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox" 
        defaultChecked={numsAllowed}
        id="numberInput"
        onChange={() =>{
          setNumsAllowed((prev)=>!prev)
        }}
        
        />
        <label htmlFor='numberInput'> Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox" 
        defaultChecked={charAllowed}
        id="charInput"
        onChange={() =>{
          setCharAllowed((prev)=>!prev)
        }}
        
        />
        <label htmlFor='charInput'> Characters</label>
      </div>
     </div>


     </div>

     
    </>
  )
}

export default App
