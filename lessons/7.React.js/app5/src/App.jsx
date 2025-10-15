import React, { useState } from 'react'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import Comp3 from './components/Comp3'
import DataProvider from './context/DataContext'

const App = () => {
  return (
    <>
      <DataProvider>
        <Comp1 />
        <Comp2 />
        <Comp3 />
      </DataProvider>
    </>
  )
}

export default App