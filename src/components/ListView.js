import React, { Suspense } from 'react'
import './ListView.css'
const ListItem = React.lazy( ()=> import('./ListItem') )

function ListView( {itemList, setItemList} ) {
    
    return (
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
    )
}

export default ListView
