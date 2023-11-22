/**
 * Implement a generic that returns the first type
 * in a tuple.
 *
 * Hint: How would you do it if `Tuple` was a value?
 */
    type First<Tuple extends any[]> = TODO
  
    type res1 = First<[]>;
  
    type res2 = First<[string]>;
  
    type res3 = First<[2, 3, 4]>;
  
    type res4 = First<["a", "b", "c"]>;