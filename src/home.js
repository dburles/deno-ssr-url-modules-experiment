import button from './bits/button.js';

function home ({ count = 0, data } = {}) {
  return `
    Home: ${data}
    ${button({ id: 'counter' }, count)}
    ${button({ id: 'refetch' }, 'Refetch')}
    <a href="/page_one">Page One</a>
  `;
}

export default home;
