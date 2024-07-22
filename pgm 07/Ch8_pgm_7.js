var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

showInfo = function (itemToShow) {
    console.log(itemToShow);
};

items.forEach(showInfo);

items.push("Great wall of china");
items.push("Machu,picchu");

showInfo =  function(itemToShow) {
    console.log(itemToShow + " - " + itemToshow.length + " letters");
};

var totalLetters = function() {
    var total = 0;
    items.forEach(function(item) {
        total += item.length;
      });
      return total;
    };

