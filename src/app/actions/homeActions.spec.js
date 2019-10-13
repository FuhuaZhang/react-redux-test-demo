import { SAY_HELLO } from './types';
import { sayHello } from './homeActions';
import homeResource from '../resources/homeResource';

jest.mock('../resources/homeResource');

it('should dispatch hello', done => {
  const expected = { type: SAY_HELLO, payload: 'hi' };
  homeResource.sayHello.mockResolvedValue(expected.payload);

  const dispatch = jest.fn(dispatched => {
    expect(dispatched).toEqual(expected);
    done();
  });

  sayHello()(dispatch);
});