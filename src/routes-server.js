// All these imports should be dynamic eventually.
import button_one from './button_one.js';
import button_two from './button_two.js';
import button_one_data from './button_one_data.js';
import button_two_data from './button_two_data.js';

const routes = [
  /^$/, () => ({
    module_name: 'button_one.js',
    module: button_one,
    module_data: button_one_data
  }), 
  /^button$/, () => ({
    module_name: 'button_two.js',
    module: button_two,
    module_data: button_two_data
  })
];

export default routes;
