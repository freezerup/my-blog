import React, { Component } from 'react'
import { NavLink, location, history, withRouter } from 'react-router-dom'
import './index.scss'

const tabs = [
  {
    name: '首页',
    path: '/',
    icon: 'diao-home',
    iconActive: 'diao-home1',
  },
  {
    name: '我的',
    path: '/user',
    icon: 'diao-my',
    iconActive: 'diao-myfill',
  },
  {
    name: '标签',
    path: '/label',
    icon: 'diao-label-active',
    iconActive: 'diao-label',
  },
  {
    name: '分类',
    path: '/classify',
    icon: 'diao-classify',
    iconActive: 'diao-classify-active',
  },
  {
    name: '归档',
    path: '/file',
    icon: 'diao-pigeonhole',
    iconActive: 'diao-pigeonhole-active',
  }
]
class TabBar extends Component {
  render() {
    const tabEach = tabs.reduce((total,tab) => {
      return total.concat(
        <NavLink to={tab.path} key={tab.path} className="tab">
            <i className={`icon ${'/'=== tab.path ? tab.iconActive:tab.icon}`}></i>
            <span>{tab.name}</span>
        </NavLink>
      )
    }, [])
    return (
      <div className="tabs">
        {tabEach}
      </div>
    )
  }
}

export default TabBar
