import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div id='header'>
            <h1>this is header</h1>
            <ul>
                <li>
                    <Link to={"/"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={"/about"}>
                        about
                    </Link>
                </li>
                <li>
                    <Link to={"/contact"}>
                        contact
                    </Link>
                </li>
                <li>
                    <Link to={"/service/web-development"}>
                        Service - web development
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
