/**
 * Type the `all` function to take a list of promises and
 * to turn them into a single promise containing a list of values.
 */

  declare function all<
    // Infer `Promises` as a tuple of promises:
    Promises extends [Promise<any>, ...Promise<any>[]]
  >(promises: Promises): Promise<UnwrapAll<Promises>>;

  type UnwrapAll<Promises> = TODO

  // Two promises
  const res1_2 = all([Promise.resolve(20), Promise.resolve("Hello" as const)]);
  // Expected: Promise<[number, "Hello"]

  // Three promises
  const res2_2 = all([Promise.resolve(true), Promise.resolve("!"), Promise.resolve({})]);
  // Expected: Promise<[boolean, string, {}]>

  // Five promises
  const res3_2 = all([
    Promise.resolve(3),
    Promise.resolve("Hello" as const),
    Promise.resolve(true),
    Promise.resolve({ key: "value" }),
    Promise.resolve(["array"]),
  ]);
  // Expected: Promise<[number, "Hello", boolean, { key: string }, string[]]>
