/**
 * Implement a type to make the `id` key optional. Be careful, we do not know the type of the `id` key.
 */

type MakeIdOptional<Obj extends { id: unknown }> = TODO

type result1 = MakeIdOptional<{
  id: number;
  name: string;
  age: unknown;
}>;

type result1 = MakeIdOptional<{
  id: string;
  title: string;
  content: string;
}>;