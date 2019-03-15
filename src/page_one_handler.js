import { create_handler } from './client.js';
import page_one from './page_one.js';

export default create_handler(page_one, function ({ render, navigate }) {
  let count = 0;

  return function mount () {
    document.getElementById('counter').addEventListener('click', function () {
      count += 1;
      render({ count });
    });
    
    return function unmount () {}
  }
});
