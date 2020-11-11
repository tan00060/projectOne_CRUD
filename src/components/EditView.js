import React from 'react'
import {useHistory} from 'react-router-dom'
import './EditView.css'
import {Button, TextField} from '@material-ui/core'

function EditView( {itemList, setItemList, framework, url, lead, id, list, setDisplay} ) {
    const history = useHistory();
    const cancelRef = React.useRef()
    const [newFramework, setFramework] = React.useState(framework)
    const [newUrl, setUrl] = React.useState(url)
    const [newLead, setLead] = React.useState(lead)

    console.log(list.id)

    const saveHandler = (ev) => {
        ev.preventDefault()
        const index = itemList.findIndex(
            (item) => item.id === list.id
        )

        const test = [...itemList]
        test[index] = ({
                id: list.id,
                framework: newFramework,
                url: newUrl,
                lead: newLead
        })
        setItemList(test)
        setDisplay(false)
        history.push('/')
    }

    const cancelHandler = (ev) =>{
        ev.preventDefault()
        cancelRef.current.reset()
        console.log("this will cancel new item")
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
                            onChange={ev => setFramework(ev.target.value)}>
                        </TextField>
                        <TextField
                            variant="outlined"
                            className="labels"
                            placeholder={url} 
                            onChange={ev => setUrl(ev.target.value)}>
                        </TextField>
                        <TextField
                            variant="outlined"
                            className="labels"
                            placeholder={lead}
                            onChange={ev => setLead(ev.target.value)}>
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
