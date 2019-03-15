import create_handler from './lib/main.js';
import button from './button_two.js';

export default create_handler(button, function ({ render, navigate }) {
  console.log('create_handler');
  let count = 0;

  async function counter_click_handler () {
    console.log('counter_click_handler');
    count += 1;
    render({ count });
  };
  async function next_click_handler () {
    navigate('/');
  };

  return function mount () {
    console.log('mount');

    document.getElementById('counter').addEventListener('click', counter_click_handler);
    document.getElementById('next').addEventListener('click', next_click_handler);
    
    return function unmount () {
      console.log('unmount');
    }
  }
});
