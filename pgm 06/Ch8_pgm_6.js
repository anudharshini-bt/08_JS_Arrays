var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");


console.log(items);

removed = items.pop();

console.log(removed + " was removed");
console.log(items.join(" and "));

items.push("The Taj Mahal");
console.log(items);

items .push("Eiffel Tower");
console.log(items);