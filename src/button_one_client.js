import add1 from './lib/add1.js';

function mount () {
  const counterClickHandler = async function () {
    document.getElementById('counter').innerText = await add1(Number(document.getElementById('counter').innerText));
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
