import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";
import { RomanRouter } from "./converters/roman";

const app = new Koa();
const router = new Router();

router.use("/roman", RomanRouter.routes(), RomanRouter.allowedMethods());

app.use(logger()).use(router.routes()).use(router.allowedMethods());
app.listen(3000);

export default app;
