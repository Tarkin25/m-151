import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import EmployeePage from './pages/EmployeePage';
import store from "./core/store/store";
import {Provider} from 'react-redux';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="" component={EmployeePage}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default App

