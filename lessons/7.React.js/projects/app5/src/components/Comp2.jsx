import React from 'react'

import { useData } from '../context/DataContext'

const Comp2 = () => {

    let { data, status } = useData()

    return (
        <div>
            <h1>this is component 2</h1>
            <ul>
                <li>{data}</li>
                <li>{status ? "true" : "false"}</li>
            </ul>
        </div>
    )
}

export default Comp2
