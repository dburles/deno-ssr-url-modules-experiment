import button from './bits/button.js';

function page_one ({ count = 0, data } = {}) {
  return `
    Page One: ${data}
    ${button({ id: 'counter' }, count)}
    <a href="/">Home</a>
  `;
}

export default page_one;
