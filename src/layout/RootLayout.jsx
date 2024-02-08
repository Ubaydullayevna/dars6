import React from "react"
import {Outlet} from "react-router-dom"
import Navbar from "../compenents/navbar/Navbar"
import Footer from "../compenents/footer/Footer"

function RootLayout() {
  return (
    <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout
