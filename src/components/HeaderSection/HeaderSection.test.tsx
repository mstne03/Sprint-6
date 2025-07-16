import React from 'react';
import ReactDOM from 'react-dom';
import HeaderSection from './HeaderSection';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});