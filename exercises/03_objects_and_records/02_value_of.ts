/**
 * Implement a type to get the union of all values.
 */

type ValueOf<Obj> = TODO

type result1 = ValueOf<{ a: number; b: string }>;

type result2 = ValueOf<{ a: number; b: string; c: boolean }>;

type result3 = ValueOf<{}>;