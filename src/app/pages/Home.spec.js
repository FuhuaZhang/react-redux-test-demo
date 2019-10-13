import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store';

import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import Home from './Home';

const mockStore = configureStore([thunk]);

it('shoud render hello', () => {
  const expectedHelloMessage = 'Hello World';
  const store = mockStore({
    homeReducer: {
      helloMessage: expectedHelloMessage
    }
  });

  const { getByTestId } = render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );

  const actualHello = getByTestId('hello');

  expect(actualHello).toHaveTextContent(expectedHelloMessage);
});