import create_handler from './lib/main.js';
import button from './button_two.js';

export default create_handler(button, function ({ render, navigate }) {
  console.log('create_handler 2');
  let count = 0;

  async function counter_click_handler () {
    console.log('counter_click_handler 2');
    count += 1;
    render({ count });
  };
  async function next_click_handler () {
    navigate('/');
  };

  return function mount () {
    console.log('mount 2');

    const elements = {
      counter: document.getElementById('counter'),
      next: document.getElementById('next')
    };

    console.log(elements);

    elements.counter.addEventListener('click', counter_click_handler);
    elements.next.addEventListener('click', next_click_handler);
    
    return function unmount () {
      console.log('unmount 2');
      elements.counter.removeEventListener('click', counter_click_handler);
      elements.next.removeEventListener('click', next_click_handler);
    }
  }
});
