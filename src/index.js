

import React from 'react';
import ReactDOM from 'react-dom';
import ClickityClick from './components/ClickityClick';
import ButtonCounter from './components/ButtonCounter';
import LightSwitch from './components/LightSwitch';


ReactDOM.render(
  <div>
    Mount Components Here
    <ClickityClick />
    <hr></hr>
    <ButtonCounter />
    <hr></hr>
    <LightSwitch />
  </div>,
  document.getElementById('root')
);
