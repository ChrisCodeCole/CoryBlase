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
      display: "grid"
    }
    return (
      <div className="App">
        <TopNavBar />
        <div className="content-container" style={{float:"right", width:"80%"}}>
          <Introduction />
          <PhotoGrid />
          <PhotoDisplay />
          <Contact />
        </div>
        <SideBar />
      </div>
    );
  }
}

export default App;
