import { create_handler } from './client.js';
import page_one from './page_one.js';

export default create_handler(page_one, function ({ render, navigate }) {
  let count = 0;

  return {
    onIncrement: function () {
      count += 1;
      render({ count });
    }
  };
});
