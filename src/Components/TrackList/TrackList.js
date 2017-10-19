import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        <ul>
          <li>{this.props.tracks.map(track => {track})}</li>
        </ul>
      </div>
    )
  }
}

export default TrackList;
