/**
 * Implement a generic that gets the length
 * of a tuple type, and adds one to it.
 *
 * This challenge may seem a bit random, but
 * this is actually the basis of representing
 * numbers and doing arithmetics at the type level!
 */
    type LengthPlusOne<Tuple extends any[]> = TODO
  
    type res1 = LengthPlusOne<[]>;
  
    type res2 = LengthPlusOne<[any]>;
  
    type res3 = LengthPlusOne<[any, any]>;