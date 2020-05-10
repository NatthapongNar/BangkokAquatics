import React from 'react'
import { Router } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import Aquatics from './containers/aquatics'

export default (history) => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/aquatics" component={Aquatics} />
            </Switch>    
        </Router>
    )
}