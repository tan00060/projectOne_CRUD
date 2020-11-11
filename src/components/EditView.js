import React from 'react'
import {useHistory} from 'react-router-dom'
import './EditView.css'
import cuid from 'cuid';
import ListItem from './ListItem'


function EditView( {itemList, setItemList, framework, url, lead, id, list, setDisplay} ) {
    const history = useHistory();
    var cuid = require('cuid');
    const cancelRef = React.useRef()

    const [newFramework, setFramework] = React.useState(framework)
    const [newUrl, setUrl] = React.useState(url)
    const [newLead, setLead] = React.useState(lead)

    let [editList, setEditList] = React.useState()


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

        console.log(test)
        setItemList(test)
        
        // setItemList([...itemList, {
        //     id: id,
        //     framework: ev.target.framework.value,
        //     url: ev.target.url.value,
        //     lead: ev.target.lead.value
        // }])
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
                        <div className="labels">
                            <label htmlFor="framework" >framework</label>
                            <input type='text' id="framework" placeholder={framework} onChange={ev => setFramework(ev.target.value)}></input>
                        </div>
                        <div className="labels"> 
                            <label htmlFor="url" >url</label>
                            <input type='text' id="url" placeholder={url} onChange={ev => setUrl(ev.target.value)}></input>
                        </div>
                        <div className="labels">
                            <label htmlFor="lead" >lead</label>
                            <input type='text' id="lead" placeholder={lead} onChange={ev => setLead(ev.target.value)}></input>
                        </div>
                    </div>

                    <div className="form-button">
                        <div className="button-container">
                            <button cuid={list.id} className="save-btn" type="submit">save edit</button>
                            <button className="cancel-btn" type="cancel" onClick={cancelHandler} >Cancel</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default EditView
