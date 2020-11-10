import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';

import ListView from'./components/ListView'
import AppHeader from './components/AppHeader'
import NewItemView from './components/NewItemView'

function App() {
  
  
  const [itemList, setItemList] = useState([])
  
  useEffect( () =>{
    console.log("this is where i get my local storage")
    getLocalStorage()
  },[])

  useEffect( () =>{
    saveLocalStorage()
  },[itemList])

  const saveLocalStorage = () =>{
    localStorage.setItem('listItems', JSON.stringify(itemList))
  }

  const getLocalStorage = () => {
    if(localStorage.getItem('listItems') === null){
      localStorage.setItem('listItems', JSON.stringify([]))
    }else{
      let getLocalStorage = JSON.parse(localStorage.getItem('listItems'))
      console.log(getLocalStorage)
      setItemList(getLocalStorage)
    }
  }


  return (
    <Router>
      <AppHeader/>
      <div>
        <Switch>

          <route exact path="/">
            <ListView itemList={itemList} />
          </route>

          <route exact path="/new_item">
            <NewItemView 
              itemList={itemList}
              setItemList={setItemList}
            />
          </route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
