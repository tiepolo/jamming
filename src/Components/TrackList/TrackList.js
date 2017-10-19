import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        <Track tracks="this.props.tracks.map(track => {track})" />
      </div>
    )
  }
}

export default TrackList;
