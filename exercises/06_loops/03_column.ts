/**
 * Type the `filterTable` function to take a Table,
 * a list of column names, and to return a table that
 * only contains columns with these names.
 */

  type Column = { name: string, values: unknown[] }
  
  declare function filterTable<
    // Infer `T` as a tuple containing columns:
    T extends [Column, ...Column[]],
    // Infer `N` as a union of string literal type:
    N extends string
  >(table: T, columnNames: N[]): FilterTable<T, N>;

  type FilterTable<Table, NameUnion> = TODO

  declare const userTable: [
    { name: 'firstName', values: string[] },
    { name: 'lastName', values: string[] },
    { name: 'age', values: number[] },
  ]

  const res1_3 = filterTable(userTable, ['age']);
  // Expected: [{ name: 'age', values: number[] }];

  const res2_3 = filterTable(userTable, ['firstName', 'lastName']);
  /* Expected: [
    { name: 'firstName', values: string[] },
    { name: 'lastName', values: string[] }
  ];
  */

  const res3_3 = filterTable(userTable, []);
  // Expected: []