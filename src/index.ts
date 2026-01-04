import { Elysia } from "elysia";
import { ENV } from "@utils";
import { Cors, errorHandler, Static } from "@middlewares";
import ApiRoute from "@routes";

const app = new Elysia()
  .use(Cors)
  .use(Static)
  .use(ApiRoute)
  .onError(errorHandler)
  .listen(ENV.PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname || "localhost"}:${app.server?.port}`
);

process.on("SIGINT", async () => {
  console.log("🦊 Shutting down...");
  app.server?.stop();
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("🦊 Received SIGTERM, shutting down...");
  app.server?.stop();
  process.exit(0);
});