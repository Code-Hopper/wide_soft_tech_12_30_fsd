import React from 'react'
import "./styles/style.scss"

const Comp1 = (props) => {
    return (
        <div>
            <h1>this is component 1</h1>
            <h2 className='title text-danger'>welcome {props.name} !</h2>
        </div>
    )
}

export default Comp1
