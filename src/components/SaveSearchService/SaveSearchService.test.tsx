import React from 'react';
import ReactDOM from 'react-dom';
import SaveSearchService from './SaveSearchService';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SaveSearchService />, div);
  ReactDOM.unmountComponentAtNode(div);
});