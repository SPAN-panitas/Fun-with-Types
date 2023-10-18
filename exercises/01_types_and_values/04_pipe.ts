// Make this function generic, with types
function pipe(x, f1, f2) {
    return f2(f1(x));
}

/*
pipe(
  { name: "John", age: 30 },
  user => user.name,
  name => name.length > 5
)
*/