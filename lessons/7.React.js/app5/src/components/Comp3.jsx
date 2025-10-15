import React from 'react'
import { useData } from '../context/DataContext'

const Comp3 = (props) => {
    let { data, status } = useData()
    return (
        <div>
            <h1>this is component 3 {props.data}</h1>
            <ul>
                <li>{data}</li>
                <li>{status ? "true" : "false"}</li>
            </ul>
        </div>
    )
}

export default Comp3
