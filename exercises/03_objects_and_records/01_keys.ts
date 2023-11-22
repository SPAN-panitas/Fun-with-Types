/**
 * Implement a type to get the union of all keys.
 */

type Keys<Obj> = TODO;

type result1 = Keys<{ a: number; b: string }>;

type result2 = Keys<{ a: number; b: string; c: unknown }>;

type result3 = Keys<{}>;