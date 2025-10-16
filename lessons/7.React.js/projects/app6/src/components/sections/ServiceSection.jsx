import React, { useState } from 'react'

const ServiceSection = ({ serviceName }) => {

    let status = false

    if (serviceName == "web-development" || serviceName == "mobile-development" || serviceName == "digital-marketing") {
        status = true
    }

    if (!status) return (<h1>service {serviceName} not found !</h1>)

    return (
        <div id='service-section'>
            <h1>this is {serviceName} page</h1>
        </div>
    )
}

export default ServiceSection