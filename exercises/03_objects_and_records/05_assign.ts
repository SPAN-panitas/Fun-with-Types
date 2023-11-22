/**
 * Implement a type to get the type of { ...obj1, ...obj2 }.
 */

type Assign<A, B> = TODO

type result1 = Assign<{ name: string; id: number }, { id: string }>;

type result2 = Assign<
  { name: string; age: string; role: string },
  { age: 42; role: "admin" }
>;

type result3 = Assign<{ name: string; id: number }, { age: number }>;


