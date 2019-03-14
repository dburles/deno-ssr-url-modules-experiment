import get_random_int from './get_random_int.js';

function add1 (number) {
  return new Promise(resolve => setTimeout(function () { resolve(number + 1) }, get_random_int(0, 1000)));
};

export default add1;
