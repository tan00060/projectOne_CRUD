import logo from './logo.svg';
import './App.css';

import ListView from'./components/ListView'
import AppHeader from './components/AppHeader'

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <ListView/>
    </div>
  );
}

export default App;
