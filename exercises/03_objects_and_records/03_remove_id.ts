/**
 * Create a type that removes the `id` key.
 */

type RemoveId<Obj> = TODO

type result1 = RemoveId<{
  id: number;
  name: string;
  age: unknown;
}>;

type result2 = RemoveId<{
  id: number;
  title: string;
  content: string;
}>;