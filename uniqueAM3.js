// Question:

unique(array)
Parameters
array - Any JavaScript Array
Return Value
A new Array containing only the unique elements of array, in the order they first appear in array.

  Examples
unque(['foo', 'bar', 'baz', 'qux', 'bar', 'qux', 'corge', 'baz']);
// -> ["foo", "bar", "baz", "qux", "corge"]
unque([1, 3, 3, 2, 5, 2, 1, 4, 5, 5]);
// -> [1, 3, 2, 5, 4]
unique([false, true, false, true]);
// -> [false, true]
unque([]);
// -> []




// Answer:

function unique(array) {
  const unique = [...new Set(array)];
  return unique;
}
