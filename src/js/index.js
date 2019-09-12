import ReactDOM from 'react-dom';
import React from 'react';
import Switch from './Switch';

ReactDOM.render(
  <Switch
    id="demo1"
    label="Select an option"
    onChange={o => console.log(o)}
  />,
  window.document.getElementById('demo')
);