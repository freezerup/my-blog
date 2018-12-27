import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'
import './index.scss'

// import asyncComponent from '@/utils/AsyncComponent'

// const Home = asyncComponent(() => import('@/page/home'))
// const User = asyncComponent(() => import('@/page/user'))
// const Label = asyncComponent(() => import('@/page/label'))
// const Classify = asyncComponent(() => import('@/page/classify'))
// const File = asyncComponent(() => import('@/page/file'))

const tabs = [
  {
    name: '首页',
    path: '/',
    icon: 'diao-home',
    iconActive: 'diao-home1'
  },
  {
    name: '我的',
    path: '/user',
    icon: 'diao-my',
    iconActive: 'diao-myfill'
  },
  {
    name: '标签',
    path: '/label',
    icon: 'diao-label-active',
    iconActive: 'diao-label'
  },
  {
    name: '分类',
    path: '/classify',
    icon: 'diao-classify',
    iconActive: 'diao-classify-active'
  },
  {
    name: '归档',
    path: '/file',
    icon: 'diao-pigeonhole',
    iconActive: 'diao-pigeonhole-active'
  }
]

class Tab extends Component {
  constructor(props) {
    super(props)
  }
  handleChangeRoute(e) {
    console.log(e)
  }
  render() {
    const tabEach = (tabs) => {
      return tabs.reduce((total, tab) => {
        return total.concat(
          <div key={tab.path} className="tab" onClick={this.handleChangeRoute.bind(this)}>
            <i className={`icon ${'/'=== tab.path ? tab.iconActive:tab.icon}`}></i>
            <span>{tab.name}</span>
          </div>
        )
      }, [])
    }
    return (
      <div className="tabs">
        {tabEach(tabs)}
      </div>
    )
  }
}

export default Tab
