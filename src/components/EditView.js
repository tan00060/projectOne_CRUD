import React from 'react'
import './EditView.css'
import {useHistory} from 'react-router-dom'
import {Button, TextField} from '@material-ui/core'

function EditView( {itemList, setItemList, framework, url, lead, id, list, setDisplay} ) {
    const history = useHistory();
    const cancelRef = React.useRef()
    const [newFramework, setFramework] = React.useState(framework)
    const [newUrl, setUrl] = React.useState(url)
    const [newLead, setLead] = React.useState(lead)


    //this function finds out item that we want to edit and replaces it
    //first we find the index of the item inside our item list
    //we place the item inside are variable called index
    //we then create a new const called newItemList that contains our new array object(itemList)
    //we target the item we want to change with newItemList[index]
    //then we replace that item with our new saved item and push it to state
    //we then set the edit view to false to hide it from the user
    //and we push the user back to the main page
    const saveHandler = (ev) => {
        ev.preventDefault()
        const index = itemList.findIndex(
            (item) => item.id === list.id
        )

        const newItemList = [...itemList]
        newItemList[index] = ({
                id: list.id,
                framework: newFramework,
                url: newUrl,
                lead: newLead
        })
        setItemList(newItemList)
        setDisplay(false)
        history.push('/')
    }


    //this function handles our edit view for the user
    //when the user cancel it will reset the form field
    //we will set the display to false to hide the editer from the user
    const cancelHandler = (ev) =>{
        ev.preventDefault()
        cancelRef.current.reset()
        setDisplay(false)
    }

    return (
        <div>
            <div className="newitem-form">
                <form ref={cancelRef} onSubmit={saveHandler}>
                    <div className="label-view">    
                        <TextField
                            className="labels"
                            variant="outlined"
                            placeholder={framework}
                            onChange={ev => setFramework(ev.target.value)}
                            size="small">
                        </TextField>
                        <TextField
                            variant="outlined"
                            className="labels"
                            placeholder={url} 
                            onChange={ev => setUrl(ev.target.value)}
                            size="small">
                        </TextField>
                        <TextField
                            variant="outlined"
                            className="labels"
                            placeholder={lead}
                            onChange={ev => setLead(ev.target.value)}
                            size="small">
                        </TextField>
                    </div>

                    <div className="form-button">
                        <div className="button-container">
                            <Button size="small" variant="outlined" color="primary" cuid={list.id} type="submit">save edit</Button>
                            <Button size="small" variant="outlined" color="secondary" type="cancel" onClick={cancelHandler} >Cancel</Button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default EditView
