import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import EmployeePage from './pages/EmployeePage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="" component={EmployeePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

