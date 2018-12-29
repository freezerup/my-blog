import React, { Component } from 'react'
import Header from '@/components/header'
import TabBar from '@/components/tabBar'
import Route from '@/route'
import '@/scss/main.scss'


class App extends Component {
  render() {
    return (
      <div className="container">
      <header>
        <Header />
        <div className="tab-bar">
          <TabBar />
        </div>
      </header>
      <main>
        <Route />
      </main>
      </div>
    )
  }
}

export default App
