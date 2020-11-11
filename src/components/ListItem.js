import React from 'react'
import NewItemView from './NewItemView'
import EditView from './EditView'
import './ListItem.css'

function ListItem( {itemList, setItemList, framework, lead, url, id, list}) {

    const [display, setDisplay] = React.useState(false)

    const editButtonHandler = () => {
        console.log("this will be the edit button")
        setDisplay(true)
    }

    const deleteButtonHandler = (ev) => {
        // let id = parseInt(ev.target.id)
        let id = ev.target.id
        setItemList(itemList.filter((item) => item.id !== id))
    }

    return (
        <>
        {display ? <EditView 
                        display={display}
                        setDisplay={setDisplay}
                        framework={framework}
                        url={url}
                        lead={lead}
                        list={list}
                        itemList={itemList}
                        setItemList={setItemList}
                    />:(
                        <div className="list-view-container">
                        <div key={id} className="listview-name">
                            <li>
                                <p>{framework}</p>
                                <div className="url-lead">
                                    <p>{url}</p>
                                    <p>{lead}</p>                            
                                </div>
                            </li>
                            <div className="listview-buttons">
                                <button className="save-btn" onClick={editButtonHandler} >edit</button>
                                <button className="cancel-btn" id={id} onClick={deleteButtonHandler} >delete</button>
                            </div>
                        </div>                
                </div>
        )}
        </>
    )
}

export default ListItem