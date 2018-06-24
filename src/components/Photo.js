import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

class Photo extends Component {
  render() {
    const { code, caption, display_src, likes } = this.props.post;
    const { index, comments, post, increment } = this.props;
    return (
      <figure className="grid-figure">
        <div className="likes-heart">Inside</div>
        <div className="grid-photo-wrap">
          <Link to={`view/${code}`}>
            <img src={display_src} alt={caption} className="grid-photo" />
          </Link>
          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={likes} className="likes-heart">
              {likes}
            </span>
          </CSSTransitionGroup>
        </div>
        <figcaption>
          <p>{caption}</p>
          <div className="control-buttons">
            <button onClick={() => increment(index)} className="likes">
              &hearts; {likes}
            </button>
            <Link className="button" to={`view/${code}`}>
              <span className="comment-count">
                <span className="speech-bubble" />
                {//console.log(comments[post[code]])
                comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default Photo;
