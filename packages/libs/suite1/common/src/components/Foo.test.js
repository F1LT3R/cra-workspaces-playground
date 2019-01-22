import React from 'react';
import ReactDOM from 'react-dom';
import Foo from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Foo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
