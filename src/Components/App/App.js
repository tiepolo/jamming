import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: '',
      playlistName: 'River Rock Anthems',
      playlistTracks: {
        name: 'Boys of Summer',
        artist: 'Don Henley',
        album: 'The Best of Don Henley'
      }
    }
  }

  // Adds a track to a playlist
  addTrack(track) {
    if() {

    } else {

    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
