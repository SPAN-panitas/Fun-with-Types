/**
 * Implement a generic that concatenates two tuples.
 */
    type Concat<Tuple1 extends any[], Tuple2 extends any[]> = TODO
  
    type res1 = Concat<[1, 2, 3], [4, 5]>;
    // [1,2,3,4,5]
  
    type res2 = Concat<[1, 2, 3], []>;
    // [1,2,3]
  