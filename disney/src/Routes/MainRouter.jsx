import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from '../Pages/HomePages/HomePage'
const MainRouter = () => {
  return (
   <Routes>
    <Route path="/" element={<HomePage/>} />
   </Routes>
  )
}

export default MainRouter