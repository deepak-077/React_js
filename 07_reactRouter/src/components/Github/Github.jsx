import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'
// loader fetches api data when we hover mouse over the element 
// before useEffect

function Github(){
    const data= useLoaderData()


    // // set data
    // const[data,setData]= useState([])

    // // get data when page loads
    // useEffect(() => {
    //     fetch('https://api.github.com/users/deepak-077')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
        


    // },[])

    return(
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers:{data.followers}
        <img src="data.avatar_url" alt="git pic"  width={300} />
         </div>
    )
}
export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/deepak-077')
    return response.json()
}