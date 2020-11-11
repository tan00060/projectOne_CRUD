import React from 'react'
import {useHistory} from 'react-router-dom'
import './NewItemView.css'
import cuid from 'cuid';

function NewItemView({itemList, setItemList}) {
    const history = useHistory();
    var cuid = require('cuid');

    const cancelRef = React.useRef()

    const saveHandler = (ev) => {
        ev.preventDefault()
        console.log("this is the save button")
        if(ev.target.framework.value === "" || ev.target.url.value === "" || ev.target.lead.value === ""){
            console.log("empty")
            alert("plz fill out")
        }else{
            console.log("not empty")
            setItemList([...itemList, {
                id: cuid(),
                framework: ev.target.framework.value,
                url: ev.target.url.value,
                lead: ev.target.lead.value
            }])
    
            history.push('/')
        }
    }

    const cancelHandler = (ev) =>{
        ev.preventDefault()
        cancelRef.current.reset()
        console.log("this will cancel new item")
    }

    return (
        <div>
            <div className="newitem-form">
                <form ref={cancelRef} onSubmit={saveHandler}>
                    <div className="label-view">
                        <div className="labels">
                            <label htmlFor="framework" >framework</label>
                            <input type='text' id="framework"></input>
                        </div>
                        <div className="labels"> 
                            <label htmlFor="url" >url</label>
                            <input type='text' id="url"></input>
                        </div>
                        <div className="labels">
                            <label htmlFor="lead" >lead</label>
                            <input type='text' id="lead"></input>
                        </div>
                    </div>

                    <div className="form-button">
                        <div className="button-container">
                            <button className="save-btn" type="submit" > save </button>
                            <button className="cancel-btn" type="cancel" onClick={cancelHandler} >Cancel</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewItemView
