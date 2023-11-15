/**
 * `pickOne` takes 2 arguments of potentially different
 * types and return either one or the other at random.
 * Make  generic!
 */

function pickOne(a, b) {
    return Math.random() > 0.5 ? a : b;
  }

  const res1 = pickOne(true, false);

  const res2 = pickOne(2, "some string");