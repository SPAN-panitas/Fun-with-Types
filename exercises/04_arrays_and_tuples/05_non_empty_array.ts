/**
 * Create a generic `NonEmptyArray` type that represents 
 * Arrays that contain at least one element.
 */

    type NonEmptyArray<T> = TODO
  
    function sendMail(addresses: NonEmptyArray<string>) {
      /* ... */
    }
  
    sendMail(["123 5th Ave"]);
    sendMail(["75 rue Quincampoix", "75003 Paris"]);

    sendMail([]);
    //       ^ ❌ `[]` isn't assignable to `NonEmptyArray<string>`
  