// Make this function generic, with types
function map(xs, fn) {
  return xs.map(fn);
}

let res1 = map([1, 2, 3], value => value.toString());