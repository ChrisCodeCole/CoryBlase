import React, { Component } from 'react';

class TopNavBar extends Component {
  render() {
    const TopNavBarStyle = {
      position: "fixed",
      width: "100%"
    }
    return (
      <div className="TopNavBar" style={TopNavBarStyle}>
        <nav className="hide-on-med-and-down">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">CoryBlase</a>
            <ul id="nav-mobile" className="right">
              <li><a href="sass.html">Photos</a></li>
              <li><a href="badges.html">Videos</a></li>
              <li><a href="collapsible.html">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default TopNavBar;