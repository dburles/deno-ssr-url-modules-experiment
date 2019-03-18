import htm from 'https://unpkg.com/htm?module';
import vhtml from './vhtml.js';

// function h(type, props, ...children) {
//   return { type, props, children };
// }

function createDOMElement (type, props, ...children) {
  if (typeof type === 'function') {
    return type({ ...props, children });
  }
  const element = document.createElement(type);
  for (const prop in props) {
    if (prop === 'onClick') {
      element.addEventListener('click', props[prop]);
    } else {
      element.setAttribute(prop, props[prop]);
    }
  }
  function append (child) {
    if (child instanceof Node) {
      element.appendChild(child);
    } else if (child !== undefined) {
      element.appendChild(document.createTextNode(child));
    }
  }
  children.forEach(function (child) {
    if (Array.isArray(child)) {
      child.forEach(function (grandchild) {
        append(grandchild);
      });
    } else {
      append(child);
    }
  });
  return element;
}

const html = htm.bind(typeof document === 'undefined' ? vhtml : createDOMElement);

export default html;
