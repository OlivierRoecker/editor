import React, { Component } from 'react';
import './App.css';
import Canvas from './Components/Canvas';
import Sidebar from './Components/Sidebar';

class App extends Component {

  state= {
    bgColor: 'green'
  }

  handleBgColorChange = (evt) => {
    this.setState({
      bgColor: evt.target.value
    })
  }

  render() {

    const { bgColor } = this.state
    
    return (
      <div className="App">
        <Sidebar bgColor={bgColor} handleBgColorChange={this.handleBgColorChange} />
        <Canvas bgColor={bgColor} />
      </div>
    );
  }
}

export default App;
