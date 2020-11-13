import React, {Suspense} from 'react'
import './ListItem.css'
import {Button, Typography} from '@material-ui/core'
const EditView = React.lazy ( () => import('./EditView' ))


function ListItem( {itemList, setItemList, framework, lead, url, id, list}) {
    const [display, setDisplay] = React.useState(false)

    //this function sets our edit view for the user.
    //by default it is set to false, to hide it from the user
    //when we set this value to true, it will show up onto the page for the user to edit the list item
    const editButtonHandler = () => {
        setDisplay(true)
    }

    //this is our delete function
    //we take our use state and filter it by finding the item has has the same item
    //if the id's are exact we remove it and set it to the new itemList
    const deleteButtonHandler = (ev) => {
        setItemList(itemList.filter((item) => item.id !== id))
    }

    //we use a ternary operator here to set the view of our list item view
    //if true, we show the edit view for the user so that they edit the selected list item
    //if false, we will append the the list item like normal
    return (
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
    )
}

export default ListItem