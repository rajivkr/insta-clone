import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import './styles/style.styl';

render(<Router />, document.getElementById('root'));
registerServiceWorker();
