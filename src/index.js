import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { SimpleBarChart } from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<SimpleBarChart />, document.getElementById('barchart'));
registerServiceWorker();
