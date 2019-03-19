import html from '../lib/html.js';

function button ({ onClick, children }) {
  return html`
    <button onClick=${onClick}>${children}</button>
  `;
}

export default button;
