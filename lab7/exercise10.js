const names = ["John", "Jane", "Bob", "Alice"];

const listItems = [];

names.forEach(function (name) {
  listItems.push("<li>" + name + "</li>");
});

console.log(listItems.join(""));