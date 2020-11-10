import React from 'react'
import './ListView.css'
function ListView( {itemList} ) {
    
    const editButtonHandler = () => {
        console.log("this will be the edit button")
    }

    const deleteButtonHandler = () => {
        console.log("this will be the delete button handler")
    }

    return (
        <div className="list-view-container">


            {itemList && itemList.map(list =>(
                <div key={list.id} className="listview-name">
                      <li id={list.id}>
                        <p>{list.framework}</p>
                        <p>{list.url}</p>
                        <p>{list.lead}</p>
                    </li>
                    <div className="listview-buttons">
                        <button onClick={editButtonHandler} >edit</button>
                        <button onClick={deleteButtonHandler} >delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListView
