import html from './lib/html.js';
import button from './bits/button.js';

function page_one ({ count = 0, data } = {}) {
  return html`
    <div>
      Page One: ${data}
      <${button} id="counter">${count}<//>
      <a href="/">Home</a>
    </div>
  `;
}

console.log(page_one());

export default page_one;
