import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import About from './components/About/About.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import Home from './components/home/home.jsx'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'


//creating router
// const router =createBrowserRouter([ 
//     //passing every objects which we need
//     {
//         path: '/',
//         element: <Layout/>,
//         children:[
//             {
//                 path:"",
//                 element:<Home/>
//             },
//             {
//                 path: "about",
//                 element: <About/>
//             },
//             {
//                 path: "Contact",
//                 element: <Contact/>
//             }
//         ]
//     }
// ])

// another way
const router =createBrowserRouter(
    // a method to declare routes
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path='' element={<Home/>}></Route>
            <Route path='about' element={<About/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
            {/* creating dynamic data  - in case of facebook and twitter data comes on basis of id rest layout is same for everyone*/}
            <Route path='user/:id' element={<User/>}></Route>
            <Route path='github' element={<Github/>}></Route>

            <Route 
            loader={githubInfoLoader}
            path='github' element={<Github/>}></Route>

        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // it takes a properties without it can't function
    <RouterProvider router={router}/>
  
)
