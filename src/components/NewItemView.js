import React from 'react'
import {useHistory} from 'react-router-dom'
import './NewItemView.css'
import {Button, TextField} from '@material-ui/core'


function NewItemView({itemList, setItemList}) {
    const history = useHistory();
    var cuid = require('cuid');

    const cancelRef = React.useRef()


    //this function allows us to save our new item into our itemList state
    //we take our old item and append our new object into it setting a new itemList state
    //we then go back to our old page when the user saves.
    const saveHandler = (ev) => {
        ev.preventDefault()
        setItemList([...itemList, {
            id: cuid(),
            framework: ev.target.framework.value,
            url: ev.target.url.value,
            lead: ev.target.lead.value
        }])
        history.push('/')
    }


    //this function allows us to cancel
    //we have a reference to our cancel button called cancelRef
    //when the user clicks it will reset our form and push us back to the main page.
    const cancelHandler = (ev) =>{
        ev.preventDefault()
        cancelRef.current.reset()
        history.push('/')
    }

    return (
        <div>
            <div className="newitem-form">
                <form ref={cancelRef} onSubmit={saveHandler}>
                    <div className="label-view">
                        <TextField
                            required
                            label="Framework"
                            variant="outlined"
                            className="labels"
                            id="framework"
                            size="small">
                        </TextField>
                        <TextField 
                            required 
                            label="URL" 
                            variant="outlined" 
                            className="labels"
                            id="url"
                            size="small">
                        </TextField>
                        <TextField
                            required
                            label="Lead"
                            variant="outlined"
                            className="labels"
                            id="lead"
                            size="small">
                        </TextField>
                    </div>

                    <div className="form-button">
                        <div className="button-container">
                            <Button size="small" variant="outlined" color="primary" className="save-btn" type="submit" > save </Button>
                            <Button size="small" variant="outlined" color="secondary" className="cancel-btn" type="cancel" onClick={cancelHandler} >Cancel</Button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewItemView
