import React from 'react'
import Header from '../sections/includes/Header'
import Footer from '../sections/includes/Footer'
import ServiceSection from '../sections/ServiceSection'
import { useParams } from 'react-router-dom'

const Service = () => {

    let { servicename } = useParams()

    return (
        <>
            <Header />
            <ServiceSection serviceName={servicename} />
            <Footer />
        </>
    )
}

export default Service

// http://localhost:5173/service/web-development(servicename)