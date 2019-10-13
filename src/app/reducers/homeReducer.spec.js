import homeReducer from './homeReducer';
import { SAY_HELLO } from '../actions/types';

it('should return hello', async () => {
  const action = {
    type: SAY_HELLO,
    payload: 'Hello'
  };
  const actualState = homeReducer(undefined, action);
  expect(actualState.helloMessage).toBe(action.payload);
});