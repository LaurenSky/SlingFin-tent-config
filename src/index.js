import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './data/data';
import tentConfigPics from './data/TentConfigPics'
import './index.css';

ReactDOM.render(
  <App data={data} tentConfigPics={tentConfigPics}/>,
  document.getElementById('root')
);
