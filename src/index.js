import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import './styles/style.styl';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
