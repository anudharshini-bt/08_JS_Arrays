var scores = [ 3, 1, 8, 2 ];

console.log("There are " + scores.length + " scores:");
console.log("The first score is " + scores[0]); 
console.log("The second score is " + scores[1]);
console.log("The third score is " + scores[2]);
console.log("The fourth score is " + scores[3]);
console.log("The fifth score is" + scores[4]);

scores.push([5]);

console.log("The last score" + scores[scores.length -1]);

scores.push([9]);