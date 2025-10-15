import React from 'react'
import { useData } from '../context/DataContext'

const Comp1 = () => {
    let { data, status, setData } = useData()
    return (
        <div>
            <h1>this is component 1</h1>
            <ul>
                <li>{data}</li>
                <li>{status ? "true" : "false"}</li>
            </ul>
            <button onClick={() => { setData(prev => prev + 1) }}>Click</button>
        </div>
    )
}
export default Comp1