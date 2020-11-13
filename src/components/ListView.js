import React from 'react'
import ListItem from './ListItem'
import './ListView.css'

function ListView( {itemList, setItemList} ) {
    
    return (
        <div className="list-view-container">
            {itemList && itemList.map(list =>(
                    <ListItem 
                        itemList={itemList}
                        setItemList={setItemList}
                        framework={list.framework}
                        url={list.url}
                        lead={list.lead}
                        id={list.id}
                        list={list}
                        key={list.id}
                    />
                ))}
        </div>
    )
}

export default ListView
