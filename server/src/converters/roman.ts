import Router from "koa-router";

/**
 * Convert a number between 1 an 100 into roman notation.
 * @param i
 * @returns
 */
export function integerToRoman(i: number): string {
  return _integerToRoman(i);
}

/**
 * Recursive function
 */
function _integerToRoman(i: number, current = ""): string {
  if (i / 1000 >= 1) return _integerToRoman(i - 1000, current + "M");
  else if (i / 100 >= 9) return _integerToRoman(i - 900, current + "CM");
  else if (i / 100 >= 5) return _integerToRoman(i - 500, current + "D");
  else if (i / 100 >= 4) return _integerToRoman(i - 400, current + "CD");
  else if (i / 100 >= 1) return _integerToRoman(i - 100, current + "C");
  else if (i / 10 >= 9) return _integerToRoman(i - 90, current + "XC");
  else if (i / 10 >= 5) return _integerToRoman(i - 50, current + "L");
  else if (i / 10 >= 4) return _integerToRoman(i - 40, current + "XL");
  else if (i / 10 >= 1) return _integerToRoman(i - 10, current + "X");
  else if (i / 1 >= 9) return _integerToRoman(i - 9, current + "IX");
  else if (i / 1 >= 5) return _integerToRoman(i - 5, current + "V");
  else if (i / 1 >= 4) return _integerToRoman(i - 4, current + "IV");
  else if (i / 1 >= 1) return _integerToRoman(i - 1, current + "I");
  else return current;
}

const router = new Router();
router.get("/integerToRoman/:integer", (ctx) => {
  ctx.status = 200;
  ctx.body = integerToRoman(+ctx.params.integer);
});

export const RomanRouter = router;
