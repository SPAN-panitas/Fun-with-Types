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
  
    type res2 = Length<[any]>;
  
    type res3 = Length<[any, any]>;