import React from 'react'
import { findDOMNode } from 'react-dom'
import NavLink from './NavLink'
import { IndexLink } from 'react-router'

export default React.createClass({

  componentDidUpdate() {
    findDOMNode(this).scrollTop = 0
  },

  render() {
    return (
      <div>
        <h1></h1>
        <div style={{ 
          display: 'flex',
          flexDirection: 'row',
          paddingLeft: '60px' 
        }}>
          <div style={{ paddingRight: '20px'}}>
            <span><IndexLink to="/" activeClassName="active">Home</IndexLink></span>
          </div>
          <div style={{ paddingRight: '20px' }}>
            <span><NavLink to="/gb-raw-features">GBRawFeatures</NavLink></span>
          </div>
          <div style={{ paddingRight: '20px'}}>
            <span><NavLink to="/gb-eng-features">GBEngFeatures</NavLink></span>
          </div>
          <div style={{ paddingRight: '20px'}}>
            <span><NavLink to="/wine">Wine</NavLink></span>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
})