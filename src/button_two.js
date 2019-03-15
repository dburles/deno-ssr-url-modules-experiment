function button ({ count = 0, data, params = {} } = {}) {
  return `
    Button Two: ${data}
    <button id="counter">${count}</button>
    <a href="/">Back</a>
  `;
}

export default button;
