// TODO: dynamic import and use default export
const routes = [
  /^$/, () => ({ module_name: '../home' }),
  /^page_one$/, () => ({ module_name: '../page_one' })
];

export default routes;
