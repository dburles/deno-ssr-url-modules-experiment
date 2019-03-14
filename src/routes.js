const routes = [
  /^$/, () => ({ module_name: '../button_one' }), // TODO: dynamic import and use default export
  /^button$/, () => ({ module_name: '../button_two' })
];

export default routes;
