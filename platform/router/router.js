function router (routes = []) {
  function format_path (path) {
// Remove query string
    return path.substr(1).split('?')[0];
  }

  function match (re, path) {
    return re.test(format_path(path));
  }

  function get_route (path) {
    let found_index = 0;
    const route = routes.find((r, i) => {
      if (r instanceof RegExp) {
        found_index = i;
        return match(r, path);
      }
      return false;
    });

    if (route) {
      const matches = route.exec(format_path(path));
      
      const route_value = routes[found_index + 1];

      return {
        params: matches,
        ...route_value()
      };
    }

    return undefined;
  };

  return get_route;
}

export default router;
