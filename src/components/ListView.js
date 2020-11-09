import React from 'react'
import './ListView.css'
function ListView() {
    return (
        <div className="list-view-container">
            <li className="listview-name">test item here</li>
            <div className="listview-buttons">
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
    )
}

export default ListView
