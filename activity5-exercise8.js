const values = [1, null, 2, undefined, 3, 4, null, 5, undefined];

const nonNullUndefinedValues = values.filter(function(value) {
  return value !== null && value !== undefined;
});

console.log("Non-null and non-undefined values:", nonNullUndefinedValues);