import axios from 'axios';

const URI = 'https://jsonplaceholder.typicode.com/todos/1';

export const sayHello = () => {
  return new Promise((resolve, reject) => {
    axios.get(URI)
      .then(res => {
        resolve(res.data.title);
      })
      .catch(err => {
        reject(err);
      })
  });
};

export default {
  sayHello
};