function button ({ count = 0, data, params = {} } = {}) {
  return `
    Button One: ${data}
    <button id="counter">${count}</button>
    <a href="/button">Next</a>
  `;
}

export default button;
