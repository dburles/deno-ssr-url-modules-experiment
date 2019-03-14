import { subscribe } from './router/router-client.js';
import routes from '../routes.js';
import router from './router/router.js';

const get_route = router(routes);

let mounted = function () {};

// Mount event handlers on initial page load
document.addEventListener('DOMContentLoaded', async function () {
  const route = get_route(window.location.pathname);
  const { default: mount } = await import(`${route.module_name}_client.js`);
  mounted = mount();
});

subscribe(async function ({ path, params }) {
  console.log({ path, params });
  const route = get_route(path);
  console.log(route);
  // dynamically import and render based on the route.
  const { default: view } = await import(`${route.module_name}.js`);
  const { default: mount } = await import(`${route.module_name}_client.js`);
  mounted(); // Unmount previous
  document.getElementById('root').innerHTML = view();
  mounted = mount(); // Mount new
});
