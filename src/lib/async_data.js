import get_random_int from './get_random_int.js';

function async_data () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(`Some data! ${get_random_int(0, 10)}`);
    }, get_random_int(0, 1000));
  });
};

export default async_data;
