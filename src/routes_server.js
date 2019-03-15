// All these imports should be dynamic eventually.
import home from './home.js';
import page_one from './page_one.js';
import home_data from './home_data.js';
import page_one_data from './page_one_data.js';

const routes = [
  /^$/, () => ({
    module_name: 'home.js',
    module: home,
    module_data: home_data
  }), 
  /^page_one$/, () => ({
    module_name: 'page_one.js',
    module: page_one,
    module_data: page_one_data
  })
];

export default routes;
