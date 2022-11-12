import React from 'react'
import { BrowserRouter,Route, Switch, } from 'react-router-dom';
import Catelog from '../Pages/Catelog';
import Details from '../Pages/Details';
import Home from '../Pages/Home';
function RouteConfig() {
  return (
  
    <Switch>
    <Route
        path='/:category/search/:keyword'
        component={Catelog}
    />
    <Route
        path='/:category/:id'
        component={Details}
    />
    <Route
        path='/:category'
        component={Catelog}
    />
    <Route
        path='/'
        exact
        component={Home}
    />
</Switch>
  )
}

export default RouteConfig