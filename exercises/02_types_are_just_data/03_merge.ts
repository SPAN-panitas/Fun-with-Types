/**
 * The `merge` function accepts an object of type `A`
 * and an object of type `B`, and return an object
 * with all properties of `A` and `B`.
 * Make it generic!
 */

function merge(a, b) {
    return { ...a, ...b };
  }

  const merge1 = merge({ name: "Bob" }, { age: 42 });

  const merge2 = merge({ greeting: "Hello" }, {});

  const merge3 = merge({}, { greeting: "Hello" });

  const merge4 = merge({ a: 1, b: 2 }, { c: 3, d: 4 });