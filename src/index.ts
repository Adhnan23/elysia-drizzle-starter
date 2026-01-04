import { Elysia } from "elysia";
import { ENV } from "./utils/env";
import { Cors, errorHandler, Static } from "./middlewares/";
import ApiRoute from "./routes";

const app = new Elysia()
  .use(Cors)
  .use(Static)
  .use(ApiRoute)
  .onError(errorHandler)
  .listen(ENV.PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
