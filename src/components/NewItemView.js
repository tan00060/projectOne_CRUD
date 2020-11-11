import React from 'react'
import {useHistory} from 'react-router-dom'
import './NewItemView.css'
import cuid from 'cuid';
import {Button, TextField} from '@material-ui/core'


function NewItemView({itemList, setItemList}) {
    const history = useHistory();
    var cuid = require('cuid');

    const cancelRef = React.useRef()

    const saveHandler = (ev) => {
        ev.preventDefault()
        console.log("this is the save button")
        console.log("not empty")
        console.log(ev.target.framework.value)

        setItemList([...itemList, {
            id: cuid(),
            framework: ev.target.framework.value,
            url: ev.target.url.value,
            lead: ev.target.lead.value
        }])

        history.push('/')
    }

    const cancelHandler = (ev) =>{
        ev.preventDefault()
        cancelRef.current.reset()
        history.push('/')
        console.log("this will cancel new item")
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
                            id="framework">
                        </TextField>
                        <TextField 
                            required 
                            label="URL" 
                            variant="outlined" 
                            className="labels"
                            id="url">
                        </TextField>
                        <TextField
                            required
                            label="Lead"
                            variant="outlined"
                            className="labels"
                            id="lead">
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
