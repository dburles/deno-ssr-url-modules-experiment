import html from './lib/html.js';
import button from './bits/button.js';

function home ({ onClick, onRefetch, onIncrement, count = 0, data }) {
  return html`
    <div>
      Home: ${data}
      <${button} onClick=${onIncrement}>${count}<//>
      <${button} onClick=${onRefetch}>Refetch<//>
      <${button} onClick=${onClick}>Test<//>
      <a href="/page_one">Page One</a>
    </div>
  `;
}

export default home;
