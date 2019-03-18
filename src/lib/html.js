import htm from 'https://unpkg.com/htm?module'
import vhtml from './vhtml.js'

function h(type, props, ...children) {
  return { type, props, children };
}

// Client.
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

// Server.
// function vhtml(type, props, ...children) {
//   let attributes = [];
//   for (const prop in props) {
//     attributes.push({ name: prop, value: props[prop] });
//   }

// //   return `<${type} ${attributes.map(({ name, value }) => `${name}="${value}"`).join(' ')}>
// //   ${children.map(child => typeof child === 'String' ? child : vhtml(...child)).join('')}
// // </${type}>`;
// }

const html = htm.bind(typeof document === 'undefined' ? vhtml : createDOMElement);
// const html = htm.bind(h)

// console.log(html`<h1 id=hello><p>Hello world!</p></h1>`);

export default html;
