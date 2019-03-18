import { subscribe, navigate } from './router/router_client.js';
import router from './router/router.js';

function client ({ routes }) {
// This represents one entire view mounted at the root element.
  let unmount;

// The props for the entire view.
  let props;

  const get_route = router(routes);
// Mount event handlers on initial page load from SSR.
  document.addEventListener('DOMContentLoaded', async function () {
    const route = get_route(window.location.pathname);
    const { default: handler_factory } = await import(`../${route.module_name}_handler.js`);
    const handler = await handler_factory();
// Mount event handlers.
    unmount = handler.mount();
// Mount link interceptor.
    document.querySelector('body').addEventListener('click', function (e) {
      const anchor = e.target.closest('a');
      if (anchor !== null && anchor.host === window.location.host) {
        e.preventDefault();
        navigate(anchor.getAttribute('href'));
      }
    }, false);
    props = hydrate;
    console.log('DOMContentLoaded', { hydrate });
  });

// Watch for route change events.
  subscribe(async function ({ path, params }) {
    console.log('route', { path, params });
    const route = get_route(path);
// Dynamically import and render based on route.
    const { default: handler_factory } = await import(`../${route.module_name}_handler.js`);
// TODO:
// If there is data for this route, it's passed in via the route.
// Rather than assuming each page has a _data.js.
    const { default: data } = await import(`../${route.module_name}_data.js`);
    const handler = await handler_factory();
    props = {
      params,
      data: await data()
    };
// Render into view.
    handler.render(props); 
  });

// A function used by pages to attach and handle events.
  function create_handler (view, func) {
    return async function handler () {
      const { navigate } = await import('./router/router_client.js');
      const mount = func({ render, navigate });
      async function render(new_props = {}) {
        // console.log('called render for ', view.name, props);
        // const { default: view } = await import(module_name);
        unmount();
        const updated_props = { ...props, ...new_props };
        const root_element = document.getElementById('root');
        root_element.replaceChild(view(updated_props), root_element.firstChild);
// Mount new event handlers.
        unmount = mount();
        props = updated_props;
      }
      return { mount, render };
    }
  }

  return { create_handler };
}

export default client;
