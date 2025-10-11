import React, { useState } from 'react'
import "./styles/style.scss"

const LanugageGrid = (props) => {
    return (
        <div className='language-grid'>
            <h1 className='font-bold text-3xl text-center my-10'>Language Grid !</h1>
            <div className='grid-container'>
                {
                    props.dataSetLanguages.map((item, index) => {
                        return (
                            <div key={index} className='grid-item'>
                                <h1 className='title'>{item.title}</h1>
                                <div className='scope'>
                                    <span>Scope :</span>
                                    <div className='flex gap-2 flex-wrap'>
                                        {
                                            item.scope.map((element, index) => {
                                                return (<span key={index} className='p-1 bg-gray-300'>{element}</span>)
                                            })
                                        }
                                    </div>
                                </div>
                                <h2 className='duration'>
                                    <span>Duration : </span>
                                    <span>{item.duration} weeks</span>
                                </h2>
                                <h2 className='difficulties'>
                                    <span>Difficulties : </span>
                                    <span className={item.difficulties.toLowerCase() == "Hard".toLowerCase() ? "bg-red-400 p-2" : item.difficulties.toLowerCase() == "Easy".toLowerCase() ? "bg-green-400 p-2" : item.difficulties.toLowerCase() == "Medium".toLowerCase() ? "bg-yellow-300 p-2" : null} >
                                        {item.difficulties}
                                    </span>
                                </h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LanugageGrid