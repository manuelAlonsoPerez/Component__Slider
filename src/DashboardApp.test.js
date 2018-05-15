import React from 'react';
import ReactDOM from 'react-dom';
import DashBoardApp from './dashboard-app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DashBoardApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
