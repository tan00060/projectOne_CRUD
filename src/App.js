import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';

import ListView from'./components/ListView'
import AppHeader from './components/AppHeader'
import NewItemView from './components/NewItemView'

function App() {
  
  const [itemList, setItemList] = useState([])
  
  React.useEffect( () =>{
    const getLocalStorage = () => {
      if(localStorage.getItem('listItems') === null){
        localStorage.setItem('listItems', JSON.stringify([]))
      }else{
        let getLocalStorage = JSON.parse(localStorage.getItem('listItems'))
        setItemList(getLocalStorage)
      }
    }
  
    console.log("this is where i get my local storage")
    getLocalStorage()
  },[])

  React.useEffect( () =>{
    const saveLocalStorage = () =>{
      localStorage.setItem('listItems', JSON.stringify(itemList))
    }
    saveLocalStorage()
  },[itemList])



  return (
    <Router>
      <AppHeader/>
      <div>
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
    </Router>
  );
}

export default App;
