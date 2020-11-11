import React from 'react'
import {NavLink} from 'react-router-dom'
import './AppHeader.css'

function AppHeader() {
    return (
        <header className="header-container">
                <div className="header-items">
                    <h1 className="newItem">img</h1>
                    <NavLink className="newItem" to="/">Javascript Frameworks</NavLink>
                    <NavLink className="newItem" to="/new_item">+ New Item</NavLink>
                </div>
        </header>
    )
}

export default AppHeader
