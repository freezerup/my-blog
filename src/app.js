import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import Header from '@/components/header'
import Tab from '@/components/tab'

import '@/scss/main.scss'



class App extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div className="container">
        <Header />
        <Tab />
      </div>
    )
  }
}

export default App
