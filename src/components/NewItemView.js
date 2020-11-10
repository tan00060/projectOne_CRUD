import React from 'react'
import './NewItemView.css'

function NewItemView({itemList, setItemList}) {

    const saveHandler = (ev) => {
        ev.preventDefault()
        console.log("this is the save button")
        console.log(ev.target.framework.value)
        console.log(ev.target.url.value)
        console.log(ev.target.lead.value)

        setItemList([...itemList, {
            id: Math.floor(Math.random() * 1000),
            framework: ev.target.framework.value,
            url: ev.target.url.value,
            lead: ev.target.lead.value
        }])


        
    }

    const cancelHandler = (ev) =>{
        ev.preventDefault()
        console.log("this will cancel new item")
    }

    return (
        <div>
            <div className="newitem-form">
                <form onSubmit={saveHandler}>
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
                            <button type="submit" >Save</button>
                            <button type="cancel" onClick={cancelHandler} >Cancel</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewItemView
