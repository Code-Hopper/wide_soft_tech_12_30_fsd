import React from 'react'
import "./App.css"

import { FaHome } from "react-icons/fa"

import Comp1 from './components/Comp1'

// bootstarp 
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

const App = () => {
  return (
    <>
      <h1 className='text-primary fw-bolder'>this is some heading</h1>
      <FaHome className='text-warning' size={100} />
      <Comp1 name="amey khondekar" />
    </>
  )
}

export default App
