/**
 * Implement a generic that adds a type to the end
 * of a tuple.
 */
    type Append<Tuple extends any[], Element> = TODO
  
    type res1 = Append<[1, 2, 3], 4>;
  
    type res2 = Append<[], 1>;