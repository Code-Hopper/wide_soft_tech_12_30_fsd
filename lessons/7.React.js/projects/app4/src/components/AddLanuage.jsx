import React, { use, useState } from 'react'
import "./styles/style.scss"
const AddLanuage = (props) => {

    let [formData, setFormData] = useState({
        title: "", scope: [], difficulties: "", duration: ""
    })

    let [checkUniqueTitle, setCheckUniqueTitle] = useState(false)

    const handleSumbit = (event) => {
        event.preventDefault()
        console.log(formData)
        props.dataSetLanguagesHandler((prev) => {
            return [formData, ...prev]
        })

        setFormData({ title: "", scope: [], difficulties: "", duration: "" })

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

    const checkTitle = (e) => {
        try {
            let { value } = e.target
            let result = props.dataSetLanguages.filter((language) => {
                return value.toLowerCase() == language.title.toLowerCase()
            })

            if (result.length != 0) throw ("duplicate entry !")

            setCheckUniqueTitle(true)

        } catch (err) {
            console.log("checktitle error : ", err)
            setCheckUniqueTitle(false)
        }
    }

    return (
        <div className='add-language-form'>
            <h1 className='my-10 text-center font-bold'>Add Language !</h1>
            <form onSubmit={handleSumbit} className='flex flex-col items-center gap-4 p-3'>

                <input className='p-2 border border-x-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition' onChange={
                    (event) => {
                        handleChange(event)
                        checkTitle(event)
                    }} type="text" name='title' placeholder='title' value={formData.title} />

                {
                    !checkUniqueTitle ? <h1 className='font-bold p-2 bg-red-400 text-white'>Title has to be unique !</h1> : null
                }

                <input className='p-2 border border-x-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition' onChange={handleChange} type="text" name='duration' placeholder='duration' value={formData.duration} />

                <input className='p-2 border border-x-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition' onChange={handleChange} type="text" name='scope' placeholder='scope' value={formData.scope} />

                <input className='p-2 border border-x-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition' onChange={handleChange} type="text" name='difficulties' placeholder='difficulties' value={formData.difficulties} />

                <button className={`bg-green-500 font-bold text-white hover:bg-green-700 px-5 py-2 transition-all ${!checkUniqueTitle ? "!bg-gray-400" : null } `} disabled={!checkUniqueTitle}>Add Language !</button>
            </form>
        </div>
    )
}

export default AddLanuage
