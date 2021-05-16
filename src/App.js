import '../src/scss/main.css'
import { Route, BrowserRouter, Switch, Router, NavLink } from 'react-router-dom'
import {createBrowserHistory} from 'history'
import { Fragment,useEffect } from 'react';
import Header from './Components/Header/Header';
import TrangChu from './Pages/TrangChu/TrangChu';
export  const history = createBrowserHistory();

function App() {
  
  return (
    <Router history={history}>

      <div className="App">
        <Switch>
          <Route path='/' component={TrangChu} />    
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
