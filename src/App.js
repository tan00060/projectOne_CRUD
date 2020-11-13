import React, {useState, Suspense} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';

const ListView = React.lazy( () => import('./components/ListView'))
const AppHeader = React.lazy( () => import('./components/AppHeader'))
const NewItemView = React.lazy(() => import('./components/NewItemView'))

function App() {
  
  const [itemList, setItemList] = useState([])
  

  //this is our local storage
  //getting local storage at the start of our application to set to our itemList state
  //if we have nothing in our local storage we will set it to an empty []
  React.useEffect( () =>{
    const getLocalStorage = () => {
      if(localStorage.getItem('listItems') === null){
        localStorage.setItem('listItems', JSON.stringify([]))
      }else{
        let getLocalStorage = JSON.parse(localStorage.getItem('listItems'))
        setItemList(getLocalStorage)
      }
    }
    getLocalStorage()
  },[])


  //this is were we will set our local storage
  //everytime there is a change to itemList, we will update it to the new itemList
  React.useEffect( () =>{
    const saveLocalStorage = () =>{
      localStorage.setItem('listItems', JSON.stringify(itemList))
    }
    saveLocalStorage()
  },[itemList])



  return (  
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <AppHeader/>
        <div className="header-top-padding">
          <Switch>

            <Route exact path="/">
              <ListView
                itemList={itemList}
                setItemList={setItemList}
              />
            </Route>

            <Route exact path="/new_item">
              <NewItemView 
                itemList={itemList}
                setItemList={setItemList}
              />
            </Route>

          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
