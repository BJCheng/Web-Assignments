function triangle(lines) {
    if (typeof lines !== 'number') throw new Error('argument in wrong type when printing triangle');

    if (lines === 1) return console.log('/\\');

    for (var i = 0; i < lines; i++) {
        var horizontalMargin = lines - i;
        var spaceWithin = (i) * 2;
        var leftPart = paddy('/', horizontalMargin);
        var rightPart = paddy('\\', spaceWithin+1);
        if (i === lines - 1)
            rightPart = paddy('\\', spaceWithin+1, '_');
        console.log(leftPart + rightPart);
    }
}


function square(lines) {
    if (lines < 2) return console.log('the height of square must greater than 1');
    if (typeof lines !== 'number') throw new Error('argument in wrong type');

    for (let i = 0; i < lines; i++) {
        var shape = '|';
        if (i == 0 || i == lines - 1){
            for(let j = 0; j < lines; j++)
                shape = shape.concat('-');
        }
        else{
            for(let j = 0; j < lines; j++){
                shape = shape.concat(' ');
            }
        }
        shape = shape.concat('|');
        console.log(shape);
    }
}


function rhombus(lines) {
    if (lines < 2) return console.log('the length of rhombus must greater than 1');
    if (lines % 2 != 0) return console.log('the length of rhombus must be even');
    if (typeof lines !== 'number') throw new Error('argument in wrong type');

    for (let i = 0; i < lines; i++) {
        var leftPart, rightPart;
        var median = lines / 2;
        if (i < median) {
            leftPart = lines / 2 - i;
            rightPart = 2 + 2 * i;
            if (i==0)
                console.log(paddy('/-\\', leftPart+2));
            else
                console.log(paddy('/', leftPart) + paddy('\\', rightPart));
        }
        else {
            leftPart = i - (lines / 2)+1;
            rightPart = (4*median) - 2*i;
            if (i==lines-1)
                console.log(paddy('\\-/', leftPart+2));
            else
                console.log(paddy('\\', leftPart) + paddy('/', rightPart));
        }
        
    }
}


/**
 * referenced from: http://stackoverflow.com/questions/1267283/how-can-i-create-a-zerofilled-value-using-javascript?answertab=votes#tab-top
 */
function paddy(n, p, c) {
    var pad_char = typeof c !== 'undefined' ? c : ' ';
    var pad = new Array(1 + p).join(pad_char);
    return (pad + n).slice(-pad.length);
}

exports.triangle = triangle;
exports.square = square;
exports.rhombus = rhombus;