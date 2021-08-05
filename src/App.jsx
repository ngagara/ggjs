import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import Quiz from './components/Quiz/index'
import StartPage from './page/StartPage/index'
import EndPage from './page/EndPage/index'
import './App.scss'

function App() {

  return (
    <Switch>
      <Route component={StartPage}  path={'/start'} exact/>
      <Route component={Quiz} path={'/quiz'}/>
      <Route component={EndPage} path={'/end'}/>
      <Route path={`*`} render = {() => ( <Redirect to={`/start`}/> )}/>
    </Switch>
  );
}

export default App;
