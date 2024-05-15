import React from 'react'
import {useParams } from 'react-router-dom'

function User(){
    const {id}=useParams()
    return(
        // id should be same as used in main.jsx line 44
        <div>User: {id}  </div>
    )
}
export default User
