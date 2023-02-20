import Router from "koa-router";

/**
 * Convert a number between 1 an 100 into roman notation.
 * @param i
 * @returns
 */
export function integerToRoman(i: number): string {
  return "I";
}

const router = new Router();
router.get("/integerToRoman/:integer", (ctx) => {
  ctx.status = 200;
  ctx.body = integerToRoman(+ctx.params.integer);
});

export const RomanRouter = router;
