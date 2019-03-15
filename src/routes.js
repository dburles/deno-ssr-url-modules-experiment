const routes = [
  /^$/, () => ({ module_name: '../home' }), // TODO: dynamic import and use default export
  /^button$/, () => ({ module_name: '../button_two' })
];

export default routes;
