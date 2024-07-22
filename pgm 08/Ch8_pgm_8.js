var items = [ "The Pyramids", "The Grand Canyon", "Bondi Beach" ];

console.log("Number of dream destinations: " + items.length);
console.log("Dream destinations:");

items.forEach(function (item, index) {
	console.log(" " + (index + 1) + ". " + item);
});

var showItems = function() {
  console.log("Number of dream destinations: " + items.length);
  console.log("Dream destinations:");

  items.forEach(function (item, index) {
    console.log(" " + (index + 1) + ". " + item);
  });
};