import client from '../platform/client.js';
import routes from './routes.js';

// Initialise the client.
const { create_handler } = client({ routes });

export { create_handler };
