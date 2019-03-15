import { serve } from 'https://deno.land/std@v0.2.10/http/server.ts';
import { contentType } from 'https://deno.land/std/media_types/mod.ts';
import { extname } from 'https://deno.land/std/fs/path.ts';
const { stat, open, cwd } = Deno;
import router from './lib/router/router.js';
import routes from './routes-server.js';

function html ({ script, body, hydrate }) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Page Title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="lib/main.js" type="module"></script>
  <script src="${script}" type="module"></script>
  <script>
  const hydrate = ${hydrate};
  </script>
</head>
<body>
  <div id="root">${body}</div>
</body>
</html>`;
}

async function serve_file (filename) {
  const file = await open(filename);
  const file_info = await stat(filename);
  const headers = new Headers();
  headers.set('content-length', file_info.len.toString());
  headers.set('content-type', contentType(extname(filename)) || 'text/plain');
  const res = {
    status: 200,
    body: file,
    headers
  };
  return res;
}

function resolve_file (url) {
  return cwd() + '/src/' + url;
}

const host = 'localhost';
const port = 3000;
const s = serve(`${host}:${port}`);

const get_route = router(routes);

async function main() {
  console.log(`Server running on http://${host}:${port}`);

  for await (const req of s) {
    // console.log(req.method, req.url);

    const route = get_route(req.url);
    
    // If we find a route, serve the route.
    if (route !== undefined) {
      const props = { // Provide server rendered content.
        // Router parameters.
        params: route.params,
        // Async data.
        ...(typeof route.module_data === 'function') && {
          data: await route.module_data()
        }
      };
      const page = html({
        script: route.module_name, // Entry point.
        body: route.module(props),
        hydrate: JSON.stringify(props)
      });
      req.respond({ body: new TextEncoder().encode(page) });
    } else {
      // Otherwise, serve files.
      // XXX: SECURE
      try {
        req.respond(await serve_file(resolve_file(req.url)));
      } catch (error) {
        console.log(req.url, '404');
        req.respond({ status: 404, body: new TextEncoder().encode('404: Not found.') });
      }
    }
  }
}

main();
