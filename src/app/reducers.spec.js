import reducers from './reducers';

// from redux dev tool
it('reducers', () => {
  let state;
  state = reducers({ homeReducer: { helloMessage: '' } }, { type: 'SAY_HELLO', payload: 'Hello World' });
  expect(state).toEqual({ homeReducer: { helloMessage: 'Hello World' } });
});
