import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {
          this.props.tracks.map(track => {
            return <Track key={track.id} name={track.name} artist={track.artist} album={track.album} />
          });
        }
      </div>
    )
  }
}

export default TrackList;
