import React from 'react';
import './Track.css';

class Track extends React.Component {
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3><!-- track name will go here --></h3>
          <p><!-- track artist will go here--> | <!-- track album will go here --></p>
        </div>
        renderAction() {
          if (isRemoval) {
            return <a className="Track-action">+</a>;
          } else {
            return<a className="Track-action">-</a>
          }
        }
      </div>
    )
  }
}

export default Track;
