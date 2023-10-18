// Make this function generic
function safeHead(xs, defaultValue) {
  return xs[0] ?? defaultValue;
}

// h1 type is any, but we want it to be number
const h1 = safeHead([1, 2, 3], 0);

// the default value should be of the same type as the array elements
safeHead([1, 2, 3], '0'); // wrong type