import create_handler from './lib/main.js';
import home from './home.js';
import home_data from './home_data.js';

export default create_handler(home, function ({ render }) {
  let count = 0;

  return function mount () {
    document.getElementById('counter').addEventListener('click', function () {
      count += 1;
      render({ count });
    });
    document.getElementById('refetch').addEventListener('click', async function () {
      render({ data: await home_data() });
    });
    
    return function unmount () {}
  }
});
