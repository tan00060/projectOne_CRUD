import React from 'react'
import {NavLink} from 'react-router-dom'
import './AppHeader.css'
import logo from '../logo.svg'

function AppHeader() {
    return (
        <header className="header-container">
                <img src={logo} alt="react"/>
                <NavLink className="newItem" to="/">Javascript Frameworks</NavLink>
                <NavLink className="newItem" to="/new_item">+ New Item</NavLink>
        </header>
    )
}

export default AppHeader
