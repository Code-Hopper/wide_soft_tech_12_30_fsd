import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Dashboard = () => {

    let navigate = useNavigate()

    let { name } = useParams()

    useEffect(() => {
        if (name != "amey") navigate("/")
    }, [])

    return (
        <>
            <h1>this is dashboard page</h1>
            <button onClick={() => { navigate("/") }}>Back to home</button>
            <Outlet />
        </>
    )
}

export default Dashboard
