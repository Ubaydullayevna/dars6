// import React from "react";
// import Navbar from "./compenents/navbar/Navbar";
// import Footer from "./compenents/footer/Footer";
// import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";


// function App() {
  
//   // const routes = createBrowserRouter(
//   //   createRoutesFromElements(
//   //     <Route>
//   //       <Route path="/" element={<Home/>}/>
//   //       <Route path="/about" element={<About/>}/>
//   //       <Route path="/blog" element={<Blog/>} />
//   //       <Route path="/register" element={<Register/>}/>
//   //     </Route>
//   //   )
//   // )
//   return <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
//     <Navbar/>
//     <main>
//       <Outlet/>
//     </main>
//     <Footer/>
//   </div>;
// }

// export default App;


import React from "react"
import "./App.css"
import {Navigate, RouterProvider, createBrowserRouter} from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./compenents/home/Home"
import Blog from "./compenents/blog/Blog"

function App() {
  const routest = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          
        },
      ],
    },
  ])
  return <RouterProvider router={routest} />
}

export default App

