/**
 * Implement a generic taking a tuple and returning
 * an array containing the union of all values in this tuple.
 */
    type TupleToArray<Tuple extends any[]> = Tuple[number][]
  
    type res1 = TupleToArray<[1, 2, 3]>;
    // (1 | 2 | 3)[]
  
    type res2 = TupleToArray<[number, string]>;
    // (number | string)[]
  
    type res3 = TupleToArray<[]>;
    // never[]
  
    type res4 = TupleToArray<[1] | [2] | [3]>;
    // (1 | 2 | 3)[]