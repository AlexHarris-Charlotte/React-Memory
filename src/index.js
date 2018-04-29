import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import Reducer from './Store/reducer.js';

// const store = createStore(Reducer);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
