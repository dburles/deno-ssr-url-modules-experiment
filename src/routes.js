const routes = [
  /^$/, () => ({ module_name: '../home' }), // TODO: dynamic import and use default export
  /^page_one$/, () => ({ module_name: '../page_one' })
];

export default routes;
