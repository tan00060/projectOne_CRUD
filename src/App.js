import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';

import ListView from'./components/ListView'
import AppHeader from './components/AppHeader'
import NewItemView from './components/NewItemView'

function App() {
  

  const [itemList, setItemList] = useState([])
  const [newItem, setNewItem] = useState([])

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
              newItem={newItem}
              setNew={setNewItem}
            />
          </route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
