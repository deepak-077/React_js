import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import About from './components/About/About.jsx'
import Home from './components/home/home.jsx'
import Layout from './Layout.jsx'

//creating router
const router =createBrowserRouter([ 
    //passing every objects which we need
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path: "about",
                element: <About/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // it takes a properties without it can't function
    <RouterProvider router={router}/>
  
)
