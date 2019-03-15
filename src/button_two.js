function button ({ count = 0, data, params = {} } = {}) {
  return `
    Button Two: ${data}
    <button id="counter">${count}</button>
    <button id="next">Back</button>
  `;
}

export default button;
