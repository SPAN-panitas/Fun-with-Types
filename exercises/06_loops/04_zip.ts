/**
 * Type lodash's `zip` function. 
 * `zip` takes several arrays containing different types of 
 * values, and turn them into a single array containing
 * tuples of values for each index.
 *
 * For example, `zip([1, 2], [true, false], ['a', 'b'])`
 * returns `[[1, true, 'a'], [2, false, 'b']]`.
 */

    declare function zip(...arrays: TODO): TODO;
  
    const res1 = zip([1, 2], [true, false]);
    // Expected: [number, boolean][]  // [[1, true], [2, false]] 
  
    const res2 = zip([1, 2], [true, false], ['a', 'b']);
    // Expected: [number, boolean, string][] // [[1, true, 'a'], [2, false, 'b']]
  
    const res3 = zip([1, 2, null], [true, false, undefined]);
    // Expected: [number | null, boolean | undefined][] // [[1, true], [2, false], [null, undefined]]

  