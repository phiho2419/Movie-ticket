import '../src/scss/main.css'
import { Route, BrowserRouter, Switch, Router, NavLink } from 'react-router-dom'
import {createBrowserHistory} from 'history'
import { Fragment } from 'react';
import Header from './Components/Header/Header';
export  const history = createBrowserHistory();


function App() {
  return (
    <div className="App">
      <Header/>
      
    </div>
  );
}

export default App;
