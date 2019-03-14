function button ({ count = 0, params = {} } = {}) {
  return `
    Button Two:
    <button id="counter">${count}</button>
    <button id="next">Back</button>
  `;
}

export default button;
