/**
 * Implement an `AssignAll` generic that takes a tuple
 * containing object types and merges all of them.
 *
 * Bonus: make it *Tail-Recursive*.
 */

    declare function assign<
      // Infer `Objects` as a tuple of objects:
      Objects extends [{}, ...{}[]]
    >(...objects: Objects): AssignAll<Objects>;
  
    type AssignAll<Tuple, Output = {}> = TODO
  
    // Two objects
    const res1_1 = assign({ name: "Michel", age: 82 }, { childrenCount: 3 });
    // Expected: { name: string; age: number, childrenCount: number }
  
    // Three objects
    const res2_1 = assign(
      { protocol: "https" as const },
      { domain: "type-level-typescript.com" },
      { path: "/recursive-types" }
    );
    // Expected: { protocol: "https", domain: string, path: string}
  
    // Five objects
    const res3_1 = assign( { a: true }, { b: 2 }, { c: "4" }, { d: null }, { 2: 2n });
    // Expected: { a: boolean; b: number; c: string; d: null; 2: bigint }
  
    // One object
    const res4_1 = assign({ fileName: "hello-world", extension: "txt" });
    // Expected: { fileName: string; extension: string }