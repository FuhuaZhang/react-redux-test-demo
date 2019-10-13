import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import Hello from './Hello';

it ('shoud render hello', () => {
  const expected = 'hello';
  const { getByTestId } = render(<Hello hello={ expected } />);
  const [ actual ] = [ getByTestId('hello') ];

  expect(actual).toHaveTextContent(expected);
});