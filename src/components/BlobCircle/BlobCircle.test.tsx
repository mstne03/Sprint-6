import React from 'react';
import ReactDOM from 'react-dom';
import BlobCircle from './BlobCircle';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlobCircle />, div);
  ReactDOM.unmountComponentAtNode(div);
});