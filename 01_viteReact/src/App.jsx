
function App() {
  const userName=" |deepak";
  

  return (
    <h1>React JS with vite 
      {userName} 
       {/* this is known as evaluated expression as it is evaluated and we can't check it here 
      because  in the end its converted to obejct and we can't write expressions inside  
      they have to be declared outside */}
    </h1>
    
  )
}

export default App
