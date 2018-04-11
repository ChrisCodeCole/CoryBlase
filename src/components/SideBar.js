import React, { Component } from 'react';
import styles from './css/SideBar.css';

class SideBar extends Component {
  render() {
    const SideBarStyle = {

      height: "100%",
      backgroundColor: "rgba(173,246,177,0.5)",
      position: "relative",
      
    }

    return (
      <div className={styles.SideBar} style={SideBarStyle}>
        <div className="SideBar-content">
          <a href="#" className="brand-logo">CoryBlase</a>
          <ul>
            <li><a href="sass.html">Photos</a></li>
            <li><a href="badges.html">Videos</a></li>
            <li><a href="collapsible.html">Contact</a></li>
          </ul>
        </div>  
      </div>
    );
  }
}

export default SideBar;