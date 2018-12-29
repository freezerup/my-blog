import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '@/page/home'
import User from '@/page/user'
import Label from '@/page/label'
import Classify from '@/page/classify'
import Files from '@/page/files'

class RouteConfig extends Component {
  render(){
    console.log('----')
    return(
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user" exact component={User} />
        <Route path="label" exact component={Label} />
        <Route path="/classify" exact component={Classify} />
        <Route path="/files" exact component={Files} />
      </Switch>
    )
  }
}

export default RouteConfig