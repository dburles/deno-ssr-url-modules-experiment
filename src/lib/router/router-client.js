const subscriptions = [];
let resolve = () => {};
let params = {};

function get_route_params() {
  return params;
}

function set_route_params (_params) {
  params = _params;
}

function subscribe (fn) {
  subscriptions.push(fn);
  return function unsubscribe () {
    subscriptions.splice(subscriptions.indexOf(fn), 1);
  };
}

function notify (path) {
  resolve(path);
  subscriptions.forEach(fn => fn({ path, params }));
}

window.onpopstate = () => notify(window.location.pathname);

function navigate (path) {
  window.history.pushState({}, null, path);
  notify(path);
}

function router (fn) {
  resolve = fn;
  notify(window.location.pathname);
}

export default router;
export { get_route_params, set_route_params, subscribe, navigate };
