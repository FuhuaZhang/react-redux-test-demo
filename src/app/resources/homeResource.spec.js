import axios from 'axios';

import { sayHello } from './homeResource';

jest.mock('axios');

it('should resolve hello', async () => {
  const expected = 'hi';
  axios.get.mockResolvedValue({
    status: 200,
    data: {
      title: expected
    }
  });

  const actual = await sayHello();
  expect(actual).toEqual(expected);
});
