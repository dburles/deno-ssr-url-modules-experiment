import html from './lib/html.js';
import button from './bits/button.js';

function home ({ count = 0, data } = {}) {
  return html`
    <div>
      Home: ${data}
      <${button} id="counter">${count}<//>
      <${button} id="refetch">Refetch<//>
      <a href="/page_one">Page One</a>
    </div>
  `;
}

// console.log(home());

// let items = ['one', 'two'];

// const Item = ({ item, index, children }) => html`
//   <li id=${index}>
//     <h4>${item}</h4>
//     ${children}
//   </li>
// `;

// console.log(html`
//   <div class="foo">
//     <h1>Hi!</h1>
//     <ul>
//       ${ items.map( (item, index) => html`
//         <${Item} item=${item} index=${index}>
//           This is item ${item}!
//         <//>
//       `) }
//     </ul>
//   </div>
// `);

export default home;
