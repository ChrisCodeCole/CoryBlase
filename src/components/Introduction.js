import React, { Component } from 'react';

class Introduction extends Component {
  constructor(props){
    super(props);

    this.state = {
      videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'
    }
  }
  render() {
    const videoStyle = {
      objectFit: "contain",
      maxHeight: "50%",
      width: "60%",
      display: "block",
      margin: "0 auto"
      
    };
    
    return (
      <div className="Introduction">
        {/*"loop autoPlay" attributes for video possible..*/}
        <video id="background-video" style={videoStyle} >
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default Introduction;