import React from 'react'
import {NavLink} from 'react-router-dom'
import './AppHeader.css'
import logo from '../logo.svg'

function AppHeader() {
    return (
        <header className="header-container">
                {/* <div className="header-items"> */}
                    <img src={logo} alt="react"/>
                    <NavLink className="newItem" to="/">Javascript Frameworks</NavLink>
                    <NavLink className="newItem" to="/new_item">+ New Item</NavLink>
                {/* </div> */}
        </header>
    )
}

export default AppHeader
