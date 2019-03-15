import create_handler from './lib/main.js';
import page_one from './page_one.js';

export default create_handler(page_one, function ({ render, navigate }) {
  let count = 0;

  async function counter_click_handler () {
    count += 1;
    render({ count });
  };

  return function mount () {
    document.getElementById('counter').addEventListener('click', counter_click_handler);
    
    return function unmount () {}
  }
});
