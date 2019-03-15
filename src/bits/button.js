function button ({ id }, children) {
  return `
    <button id="${id}">${children}</button>
  `;
}

export default button;
