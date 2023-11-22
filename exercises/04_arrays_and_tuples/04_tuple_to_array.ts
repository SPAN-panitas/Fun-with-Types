/**
 * Implement a generic taking a tuple and returning
 * an array containing the union of all values in this tuple.
 */
    type TupleToArray<Tuple extends any[]> = TODO
  
    type res1 = TupleToArray<[1, 2, 3]>;
  
    type res2 = TupleToArray<[number, string]>;
  
    type res3 = TupleToArray<[]>;
  
    type res4 = TupleToArray<[1] | [2] | [3]>;