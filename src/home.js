import button from './bits/button.js';

function home ({ count = 0, data, params = {} } = {}) {
  return `
    Home: ${data}
    ${button({ id: 'counter' }, count)}
    ${button({ id: 'refetch' }, 'Refetch')}
    <a href="/button">Next</a>
  `;
}

export default home;
