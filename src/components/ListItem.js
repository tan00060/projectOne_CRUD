import React from 'react'
import NewItemView from './NewItemView'
import EditView from './EditView'
import './ListItem.css'
import {Button, Typography} from '@material-ui/core'


function ListItem( {itemList, setItemList, framework, lead, url, id, list}) {
    const [display, setDisplay] = React.useState(false)

    const editButtonHandler = () => {
        console.log("this will be the edit button")
        setDisplay(true)
    }

    const deleteButtonHandler = (ev) => {
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
                        <div key={list.id} className="list-view-container">
                            <div key={list.id} className="listview-name">
                                <li key={list.id}>
                                    <Typography variant="h4" align="justify" color="textPrimary" >{framework}</Typography>
                                    <div className="url-lead">
                                        <Typography classname="make-space" variant="h6" color="textSecondary" >{url}</Typography>
                                        <Typography classname="make-space" variant="h6" color="textSecondary" >{lead}</Typography>                            
                                    </div>
                                </li>
                                <div className="listview-buttons">
                                    <Button size="small" variant="outlined" color="primary" onClick={editButtonHandler} >edit</Button>
                                    <Button size="small" variant="outlined" color="secondary" id={id} onClick={deleteButtonHandler} >delete</Button>
                                </div>
                            </div>                
                        </div>
        )}
        </>
    )
}

export default ListItem