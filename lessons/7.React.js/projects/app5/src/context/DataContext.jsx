import React, { createContext, useContext, useState } from 'react'

const DataContext = createContext()

const DataProvider = ({ children }) => {
    let [data, setData] = useState(123)
    let [status, setStatus] = useState(false)
    return (
        <DataContext.Provider value={{ data, status, setData }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider

export const useData = () => { return useContext(DataContext) }   