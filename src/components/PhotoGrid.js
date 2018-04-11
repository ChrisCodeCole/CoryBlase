import React, { Component } from 'react';

class PhotoGrid extends Component {
  constructor(props){
    super(props);
    this.gridRef = React.createRef();
  }

  addImages(){
    var imgArray = [];
    for(let i = 1; i <= 20; i++){       
      imgArray.push(<img key={i} src={require(`./images/img${i}.jpg`)} style={{maxWidth: "100%",
      height: "auto"}}></img>);
    };
    return imgArray;
  }

  render() {
    const GridStyle = {
      display: "grid",
      gridColumnGap: "0.5em",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      marginRight: "3em",
      marginTop : "5em"
    };
    
    return (
      <div className="PhotoGrid" style={GridStyle} ref={this.gridRef}>
        {this.addImages()}
      </div>
    );
  }
}

export default PhotoGrid;
