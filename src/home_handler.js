import { create_handler } from './client.js';
import home from './home.js';
import home_data from './home_data.js';

export default create_handler(home, function ({ render, navigate }) {
  let count = 0;

  return {
    onRefetch: async function () {
      render({ data: await home_data() });
    },
    onClick: function (event) {
      console.log(event);
    },
    onIncrement: function () {
      count += 1;
      render({ count });
    }
  };
});
