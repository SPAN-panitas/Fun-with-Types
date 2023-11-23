/**
 * Implement a generic that gets the length
 * of a tuple type.
 *
 * Hint: 
 * How would you get the length of an array in JavaScript?
 * The type-level version is very similar :)
 */

    type Length<Tuple extends any[]> = TODO
  
    type res1 = Length<[]>;
    // 0
  
    type res2 = Length<[any]>;
    // 1
  
    type res3 = Length<[any, any]>;
    // 2