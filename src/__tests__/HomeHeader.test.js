import React from 'react';
import { render } from '@testing-library/react';
import HomeHeader from '../components/layouts/HomeHeader';

describe('test the rendering of the header elements', () => {
  test('Render header elements on page correctly', () => {
    const view = render(
      <React.StrictMode>
        <HomeHeader />
      </React.StrictMode>,
    );
    expect(view).toMatchSnapshot();
  });
});