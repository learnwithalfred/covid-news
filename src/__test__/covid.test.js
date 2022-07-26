import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Covid from '../features/covid/covid';
import store from '../app/store';

describe('Covid should render correctly', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Covid />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('container should have first child', () => {
    const { container } = render(
      <Provider store={store}>
        <Covid />
      </Provider>,
    );
    expect(container.firstChild).toBeTruthy();
  });

  it('Page should have a h1 header', () => {
    const { container } = render(
      <Provider store={store}>
        <Covid />
      </Provider>,
    );
    expect(container.querySelector('h1')).toBeTruthy();
  });
});
