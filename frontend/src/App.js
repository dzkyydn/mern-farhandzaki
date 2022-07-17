import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Favicon from "react-favicon";

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Favicon url="../src/img/favicon.ico"></Favicon>
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <div className='homepage'><Homepage setLoginUser={setLoginUser} /></div> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/> 
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
