import html from '../lib/html.js';

function button ({ id, children }) {
  return html`
    <button id="${id}">${children}</button>
  `;
}

export default button;
