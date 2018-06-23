import React, { Component } from 'react';
import '../styles/App.css';
import PhotoGrid from './PhotoGrid';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Reduxstagram</h1>
          </header>
        </div>
        <div className="body">
          <PhotoGrid />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
