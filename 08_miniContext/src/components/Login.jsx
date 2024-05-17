import React, {useState, UseContext} from 'react'

import UserContext from '../context/UserContext'

function Login(){

    const[username, setUsername]= useState('')
    const[password, setPassword]= useState('')

    //fetching values from UserContext

    //setUser is declared in userContextprovider
    // we can update user through setUser we are accessing from useContext

    const {setUser} = useContext(UserContext)

    // sending data 

    const handleSubmit=(e) =>{
        e.preventDefault()
        // we dont want it to submit data 
        setUser({ username,password})
    }

    return(
        <div>
            <h2>Login</h2>
            <input type="text" 
            value={username} 
            // updating anychange to setusername
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username' />

            <input type="password" 
            value={password} 
            // updating anychange to setPassword
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Login