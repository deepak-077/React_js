import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numsAllowed,setNumsAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password, setPassword] = useState("")

  // useCallback(function,dependencies) - we can pass arrow function of in place of function

  // it gives a reference to a variable - we don't know which one to select
  // to use useRef hook we need to declare it as a variable
  const passwordRef=useRef(null)

  // useCallback -it will keep password in the cache memory

  const passwordGenerator = useCallback(() => {
    let pass= ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numsAllowed) str+= "0123456789"
    if(charAllowed) str+= "!@#$%^&*()"

    for(let i=1; i<= length; i++){
      let charac =Math.floor(Math.random()*str.length+1);

      pass+=str.charAt(charac);
    }

    setPassword(pass)
    
  },[length,numsAllowed,charAllowed,setPassword])

  //copy to clipboard
   const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); //it will highlight the selected text
    passwordRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password)
   },[password])

  // we are using setPassword instead of password because if pasword will change it will run again which can cause infinite loop


  // useEffect(function,dependencies) - we can pass arrow function of in place of function
  // it reloads a function if a page is reloaded or if any of the dependencies change


  useEffect(() => {
    passwordGenerator()

  },[length,numsAllowed,charAllowed, passwordGenerator])
  

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
      ref={passwordRef} 
      //for taking reference of input field- this statement links line 67 to 14
      />

      <button 
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy </button>

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
