import html from './lib/html.js';
import button from './bits/button.js';

function page_one ({ onIncrement, count = 0, data }) {
  return html`
    <div>
      Page One: ${data}
      <${button} onClick=${onIncrement}>${count}<//>
      <a href="/">Home</a>
    </div>
  `;
}

export default page_one;
