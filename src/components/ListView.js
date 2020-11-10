import React from 'react'
import './ListView.css'
import NewItemView from './NewItemView'

function ListView( {itemList, setItemList} ) {
    
    const editButtonHandler = () => {
        console.log("this will be the edit button")
    }

    const deleteButtonHandler = (ev) => {
        let id = parseInt(ev.target.id)
        setItemList(itemList.filter((item) => item.id !== id))
    }

    return (
        <div className="list-view-container">
            {itemList && itemList.map(list =>(
                <div key={list.id} className="listview-name">
                      <li>
                        <p>{list.framework}</p>
                        <p>{list.url}</p>
                        <p>{list.lead}</p>
                    </li>
                    <div className="listview-buttons">
                        <button onClick={editButtonHandler} >edit</button>
                        <button id={list.id} onClick={deleteButtonHandler} >delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListView
