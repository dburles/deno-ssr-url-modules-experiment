import add1 from './lib/add1.js';
import render from './lib/render.js';
import button from './button_one.js';

let count = 0;

function mount () {
  const counterClickHandler = async function () {
    // count = await add1(count);
    count += 1;
    render(button({ count }));
  };
  const nextClickHandler = async function () {
    const { navigate } = await import('./lib/router/router-client.js');
    navigate('/button');
  };

  document.getElementById('counter').addEventListener('click', counterClickHandler);
  document.getElementById('next').addEventListener('click', nextClickHandler);

  return function unmount () {
    document.getElementById('counter').removeEventListener('click', counterClickHandler);
    document.getElementById('next').removeEventListener('click', nextClickHandler);
  };
}

export default mount;
