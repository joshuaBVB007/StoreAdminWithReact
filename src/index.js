import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { name,element } from './conditional_syntax/ifs'

const recep=name;

const double = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you { recep } </h2>
  </div>
);

ReactDOM.render(
  double,
  document.getElementById('root')
);

ReactDOM.render(
  element,
  document.getElementById('rusia')
);








