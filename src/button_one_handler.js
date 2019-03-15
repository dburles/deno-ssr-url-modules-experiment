import create_handler from './lib/main.js';
import button from './button_one.js';
import button_one_data from './button_one_data.js';

export default create_handler(button, function ({ render, navigate }) {
  console.log('create_handler');
  let count = 0;

  async function counter_click_handler () {
    console.log('counter_click_handler');
    count += 1;
    render({ count });
  };
  // async function next_click_handler () {
  //   navigate('/button');
  // };
  async function refetch_click_handler () {
    render({ data: await button_one_data() });
  }

  return function mount () {
    console.log('mount');

    document.getElementById('counter').addEventListener('click', counter_click_handler);
    document.getElementById('refetch').addEventListener('click', refetch_click_handler);
    // document.getElementById('next').addEventListener('click', next_click_handler);
    
    return function unmount () {
      console.log('unmount');
    }
  }
});

// initial mount
// (
//   state etc

//   render/re-render (called both on mount, and re-render)
//   (
//     (
//       setup when mount
//     )
//     unmount
//     (
//       remove when unmount
//     )
//   )

//   unmount (called on route)
//   (
//     remove when unmount
//   )
// )