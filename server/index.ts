import Koa from "koa";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

router.get("/integerToRoman/:integer", (ctx) => {
  return ctx.params.integer;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
