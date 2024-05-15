import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github(){
    // set data
    const[data,setData]= useState([]),

    // get data when page loads
    useEffect(()=>{
        fetch('https://api.github.com/users/deepak-077')
        .then(response=>response.json)
        .then(data =>{
            console.log(data);
            setData(data)
        })


    },[])
    return(
        <div>Github Followers:{data.followers}
         </div>
    )
}
export default Github