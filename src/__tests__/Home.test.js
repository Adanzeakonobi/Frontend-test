import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/layouts/home';

describe('test the rendering of createh1 function', () => {
  test('Render createh1 elements on page', () => {
    const view = render(
      <React.StrictMode>
        <Home />
      </React.StrictMode>,
    );
    expect(view).toMatchSnapshot();
  });
});