import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  // image tag should be closed while using in tailwind
  // props - it provides reusability of a component
  // since it is component it will behave like HTML


  let myObj={
    username:"deepak",
    age:24
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4'> Tailwind</h1>

      <Card username="chaiorcode"/>
      <Card username={"hey"}/>
    </>
  )
}

export default App
