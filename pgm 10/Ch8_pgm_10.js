var rectangles = [
    { length :5,width:7 },
    { length :2,width:3 },
    { length :4,width:6 },
    { length :7,width:9 },
];

var assignArea = function(rectangle) {
    rectangle.area = rectangle.length * rectangle.width;
  };
  var showInfo = function(rectangle) {
    console.log("Length: " + rectangle.length);
    console.log("Width: " + rectangle.width);
    console.log("Area: " + rectangle.area);
    console.log("------------");
  };
  
  rectangles.forEach(function(rectangle) {
    assignArea(rectangle);
    showInfo(rectangle);
  });
  
  