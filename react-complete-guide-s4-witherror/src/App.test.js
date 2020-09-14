import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//allows us to create different tests for example units or components
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
