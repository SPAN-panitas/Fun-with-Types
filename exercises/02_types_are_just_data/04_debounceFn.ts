/**
 * Type `debounceFn` as a function with a `cancel` method on it.
 * Make it generic! 
 */

let debouncedFn

debouncedFn = Object.assign(() => {}, { cancel: () => {} });

debouncedFn();

debouncedFn.cancel();

// ❌ `unknownMethod` does not exist on `debouncedFn`.
debouncedFn.unknownMethod();