import button_one from './button_one.js';
import button_two from './button_two.js';

const routes = [
  /^$/, () => ({ module_name: 'button_one.js', module: button_one }), 
  /^button$/, () => ({ module_name: 'button_two.js', module: button_two })
];

export default routes;
