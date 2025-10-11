import React, { useState } from 'react'
import "./styles/style.scss"
const AddLanuage = (props) => {

    let [formData, setFormData] = useState({
        title: "", scope: [], difficulties: "", duration: ""
    })

    const handleSumbit = (event) => {
        event.preventDefault()
        console.log(formData)
        props.dataSetLanguagesHandler((prev) => {
            return [formData, ...prev]
        })
    }

    const handleChange = (e) => {
        let { name, value } = e.target

        if (name == "scope") {
            value = value.split(",")
            value = value.map((item) => { return item.trim() })
        }

        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    return (
        <div className='add-language-form'>
            <h1 className='my-10 text-center font-bold'>Add Language !</h1>
            <form onSubmit={handleSumbit} className='flex flex-col items-center gap-4 p-3'>

                <input className='p-2 border border-x-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition' onChange={handleChange} type="text" name='title' placeholder='title' value={formData.title} />
                <input className='p-2 border border-x-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition' onChange={handleChange} type="text" name='duration' placeholder='duration' value={formData.duration} />
                <input className='p-2 border border-x-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition' onChange={handleChange} type="text" name='scope' placeholder='scope' value={formData.scope} />
                <input className='p-2 border border-x-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition' onChange={handleChange} type="text" name='difficulties' placeholder='difficulties' value={formData.difficulties} />

                <button className='bg-green-500 font-bold text-white hover:bg-green-700 px-5 py-2 transition-all'>Add Language !</button>
            </form>
        </div>
    )
}

export default AddLanuage
