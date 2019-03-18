// *** https://github.com/developit/vhtml
const emptyTags = [
  'area',
  'base',
  'br',
  'col',
  'command',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
];

let esc = str => String(str).replace(/[&<>"']/g, s => `&${map[s]};`);

let map = {
  '&': 'amp',
  '<': 'lt',
  '>': 'gt',
  '"': 'quot',
  "'": 'apos'
};
let sanitized = {};
/** Hyperscript reviver that constructs a sanitized HTML string. */

export default function vhtml(name, attrs) {
  let stack = [];

  for (let i = arguments.length; i-- > 2;) {
    stack.push(arguments[i]);
  } // Sortof component support!

  if (typeof name === 'function') {
    (attrs || (attrs = {})).children = stack.reverse();
    return name(attrs); // return name(attrs, stack.reverse());
  }

  let s = `<${name}`;
  if (attrs) for (let i in attrs) {
    if (attrs[i] !== false && attrs[i] != null) {
      s += ` ${esc(i)}="${esc(attrs[i])}"`;
    }
  }

  if (emptyTags.indexOf(name) === -1) {
    s += '>';

    while (stack.length) {
      let child = stack.pop();

      if (child !== undefined && child !== null) {
        if (child.pop) {
          for (let i = child.length; i--;) stack.push(child[i]);
        } else {
          s += sanitized[child] === true ? child : esc(child);
        }
      }
    }

    s += `</${name}>`;
  } else {
    s += '>';
  }

  sanitized[s] = true;
  return s;
}
