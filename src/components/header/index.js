import React, { Component } from 'react'
import './index.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchkey: ''
    }
  }

  handleChangeKey(e) {
    this.setState({searchkey: e.target.value})
  }

  handleSearch() {
    console.log(`搜索:${this.state.searchkey}`)
  }

  handleEnterKey(e) {
    if (e.keyCode !== 13) {
        return
    }
    this.handleSearch()
  }

  render() {
    const input = this.state.showInput ?  <input className="input"  type="text" /> : ''
    return (
      <div className="header">
        <div className="logo">freezerup</div>
        <span className="name">freezerup</span>
        <div className="input-box">
          <input
            value={this.state.searchKey} 
            onChange={this.handleChangeKey.bind(this)}
            onKeyUp={this.handleEnterKey.bind(this)}
            placeholder="快速查询" 
            className="input"  
            type="text" />
          <label onClick={this.handleSearch.bind(this)} className="icon diao-search"></label>
        </div>
      </div>
    )
  }
}

export default Header