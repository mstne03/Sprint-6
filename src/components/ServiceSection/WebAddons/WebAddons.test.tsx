import React from 'react';
import ReactDOM from 'react-dom';
import WebAddons from './WebAddons';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WebAddons />, div);
  ReactDOM.unmountComponentAtNode(div);
});