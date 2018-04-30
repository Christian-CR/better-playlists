import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fecha from './Fecha';

let defaultTextColor = "#666";
let defaultStyle = {
    color: defaultTextColor
  };
let fakeServerData = {
    user: {
      name: 'Christian',
      playlists: [
        {
        name: 'Favoritas',
        songs: [{name:'Alone with you', duration: 1258},
                {name:'Always', duration: 1698},
                {name:'Love make things happen', duration: 1452}]
      },
      {
        name: 'Ochenteras',
        songs: [{name:'You are my lady', duration: 1463},
                {name:'There you go', duration: 1325},
                {name:'Giving my all to you', duration: 1365}]
      },
      {
        name: 'Inolvidables',
        songs: [{name:'Let`s get to the moon light', duration: 1546},
                {name:'When will I see you smile', duration: 3362},
                {name:'Please don`t go', duration: 5142}]
      },
      {
        name: 'Baladas',
        songs: [{name:'Conforter', duration: 2236},
                {name:'Before I let you go', duration: 1142},
                {name:'Don`t let me', duration: 3366}]
      }
    ]
  }
};

class PlayListCounter extends Component{
  render(){
    return(
      <div style={{...defaultStyle, width: "30%", display: 'inline-block'}}>
      <h2>{this.props.playlists && this.props.playlists.length} Listas</h2>
      </div>
    );
  }
}
class HoursCounter extends Component{
  render(){
    let allSongs = this.props.playlists.reduce((songs, eachPlaylists) => {
      return songs.concat(eachPlaylists.songs)
    }, [])
   let totalDuration = allSongs.reduce((sum, eachSong) => {
     return sum + eachSong.duration
   }, 0)
    return(
      <article>
        {/*Suma la cantidad de canciones total*/}
        <div style={{...defaultStyle, width: "30%", display: 'inline-block'}}>
          <h2>{allSongs.length} Canciones</h2>
        </div>
        {/*Suma la duración de todas la canciones*/}
        <div style={{...defaultStyle, width: "30%", display: 'inline-block'}}>
          <h2>{Math.round(totalDuration/60)} Horas</h2>
        </div>
      </article>
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
    let listadeMusica = this.props.playlist
    return (
    <div style={{...defaultStyle, display: "inline-block", width: "25%"}}>
        <img/>
        <h3>{listadeMusica.name}</h3>
        <ul>
          {listadeMusica.songs.map(song =>
            <li>{song.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => {
        this.setState({serverData: fakeServerData});
    }, 1000)

  }

  render() {

    {/*Llamado a la lista con un for loop */}
    {/*let playlistElements = []
    if(this.state.serverData.user){
      for(let i=0; i<this.state.serverData.user.playlists.length; i++){
        let playlist = this.state.serverData.user.playlists[i]
        playlistElements.push(<Playlist playlist={playlist} />)
      }
    }
    */}

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            this.state.serverData.user &&
            <h1 className="App-title">
              {this.state.serverData.user.name} Playlist
            </h1>
          }
        </header>

        <Fecha/>

        {this.state.serverData.user ?
        <section>
            <PlayListCounter playlists={this.state.serverData.user &&
                                this.state.serverData.user.playlists}/>

            <HoursCounter playlists={this.state.serverData.user &&
                                this.state.serverData.user.playlists}/>

            <Filter/>
            {
              this.state.serverData.user.playlists.map(playlist =>
                  <Playlist playlist={playlist}/>
              )}

          </section> : <h2>Loading...</h2>
        }
      </div>
    );
  }
}

export default App;
