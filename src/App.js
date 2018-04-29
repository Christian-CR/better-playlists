import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = "#666";
let defaultStyle = {
  color: defaultTextColor
}

class Agregate extends Component{
  render(){
    return(
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
      <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render() {
    return(
      <div style={{defaultStyle}}>
      <img/>
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component{
  render() {
    return (
    <div style={{...defaultStyle, display: "inline-block", width: "25%"}}>
      <img/>
      <h3>Playlist Name</h3>
      <ul>
      <li>song 1</li>
      <li>song 2</li>
      <li>song 3</li>
      </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenido a React</h1>
        </header>
        <Agregate/>
        <Agregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
