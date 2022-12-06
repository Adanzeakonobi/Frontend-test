import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/layouts/home';

describe('test the rendering of create h1 function', () => {
  test('Render create h1 elements on page', () => {
    const view = render(
      <React.StrictMode>
        <Home />
      </React.StrictMode>,
    );
    expect(view).toMatchSnapshot();
  });
});