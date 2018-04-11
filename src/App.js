import React, { Component } from 'react';
import Introduction from './components/Introduction';
import TopNavBar from './components/TopNavBar';
import Contact from './components/Contact';
import PhotoDisplay from './components/PhotoDisplay';
import PhotoGrid from './components/PhotoGrid';
import SideBar from './components/SideBar';

class App extends Component {
  render() {
    const AppStyle = {
      // display: "grid",
      // gridTemplateColumns: "1fr 4fr"
         
    }
    return (
      <div className="App" style={AppStyle} >
        <TopNavBar />
        {/* <SideBar style={{gridColumn: "1 / 2"}}/> */}
        <div className="content-container" style={{gridColumn: "2 / 3"}}>
          <Introduction />
          <PhotoGrid />
          <PhotoDisplay />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
