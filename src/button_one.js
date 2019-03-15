function button ({ count = 0, data, params = {} } = {}) {
  return `
    Button One: ${data}
    <button id="counter">${count}</button>
    <button id="next">Next</button>
  `;
}

export default button;
