// Make this function generic
function identity(arg) {
    return arg;
}

// i type is any, but we want it to be number
const i = identity(1);
// s type is any, but we want it to be string
const s = identity('hello');