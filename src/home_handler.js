import create_handler from './lib/main.js';
import home from './home.js';
import home_data from './home_data.js';

export default create_handler(home, function ({ render }) {
  console.log('create_handler');
  let count = 0;

  async function counter_click_handler () {
    console.log('counter_click_handler');
    count += 1;
    render({ count });
  };
  async function refetch_click_handler () {
    render({ data: await home_data() });
  }

  return function mount () {
    console.log('mount');

    document.getElementById('counter').addEventListener('click', counter_click_handler);
    document.getElementById('refetch').addEventListener('click', refetch_click_handler);
    
    return function unmount () {
      console.log('unmount');
    }
  }
});
