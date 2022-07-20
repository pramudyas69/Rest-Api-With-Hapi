import hapi, { server } from "@hapi/hapi";
import routes from "./app/routes/notes-route.js";

const init = async () => {
  const server = hapi.server({
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',,
    port: 5000,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server running on port ${server.info.uri}`);
};

init();
