import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        <Track key={track.id} tracks={this.props.tracks.map(track => {
          return track});
        } />
      </div>
    )
  }
}

export default TrackList;
