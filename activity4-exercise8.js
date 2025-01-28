const names = ["John", "Jane", "Bob", "Alice"];
const listItems = names.map(function(name) {
  return `<li>${name}</li>`;
});
console.log(listItems);