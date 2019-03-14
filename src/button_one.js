function button ({ count = 0, params = {} } = {}) {
  return `
    Button One:
    <button id="counter">${count}</button>
    <button id="next">Next</button>
  `;
}

export default button;
