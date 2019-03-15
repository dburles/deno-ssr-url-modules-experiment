// All these imports should be dynamic eventually.
import home from './home.js';
import button_two from './button_two.js';
import home_data from './home_data.js';
import button_two_data from './button_two_data.js';

const routes = [
  /^$/, () => ({
    module_name: 'home.js',
    module: home,
    module_data: home_data
  }), 
  /^button$/, () => ({
    module_name: 'button_two.js',
    module: button_two,
    module_data: button_two_data
  })
];

export default routes;
