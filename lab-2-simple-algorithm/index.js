var printShape  = require('./printShape.js');

// Printing the shapes with 10 random numbers.
// If the number of the sides is onvalid for printing such a shape, it will shows a message instead.
for(let i=0; i<10; i++){
    var random = Math.floor((Math.random()*20)+1);
    console.log(`printing triangle with ${random} length long`);
    printShape.triangle(random);
    console.log(`printing square with ${random} length long`);
    printShape.square(random);
    console.log(`printing rhombus with ${random} length long`);
    printShape.rhombus(random);
}