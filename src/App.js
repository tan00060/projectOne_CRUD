import React, {useState} from 'react'
import './App.css';

import ListView from'./components/ListView'
import AppHeader from './components/AppHeader'
import NewItemView from './components/NewItemView'

function App() {

  const [itemList, setItemList] = useState([])

  return (
    <div className="App">
      <AppHeader/>
      <NewItemView itemList={itemList} setItemList={setItemList} />
      <ListView itemList={itemList} />
    </div>
  );
}

export default App;
