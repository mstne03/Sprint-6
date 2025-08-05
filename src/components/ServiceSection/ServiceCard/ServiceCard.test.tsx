import React from 'react';
import ReactDOM from 'react-dom';
import ServiceCard from './ServiceCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ServiceCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});