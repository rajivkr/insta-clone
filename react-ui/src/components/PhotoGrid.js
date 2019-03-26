import React, { Component } from 'react';
import Photo from './Photo';

class PhotoGrid extends Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, index) => (
          <Photo key={index} post={post} index={index} {...this.props} />
        ))};
      </div>
    );
  }
}

export default PhotoGrid;
