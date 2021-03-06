/**
 * Written by Ben-Jen Cheng for CS-546 2017 Spring
 */
function sumOfSquares(num1, num2, num3) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number')
        throw new Error('not passing number to sumOfSquares()');
    return num1 * num1 + num2 * num2 + num3 * num3;
}

function sayHelloTo(firstName, lastName, title) {
    if (typeof firstName !== 'string')
        throw new Error('Invalid arguments in sayHelloTo()');

    if (title && typeof title === 'string' && typeof lastName === 'string') {
        return console.log(`Hello, ${title} ${firstName} ${lastName}! Have a good evening!`);
    }
    if (lastName && typeof lastName === 'string') {
        return console.log(`Hello, ${lastName} ${firstName}. I hope you are having a good day!`);
    }
    if (firstName && typeof firstName === 'string') {
        return console.log(`Hello, ${firstName}!`);
    }
    throw new Error('Invalid arguments in sayHelloTo()');
}

function cupsOfCoffee(howManyCups) {
    if (typeof howManyCups !== 'number')
        throw new Error('not passing number to cupsOfCoffee()');
    while (howManyCups > 0) {
        var plural = howManyCups > 1 ? 'cups' : 'cup';
        console.log(`${howManyCups} ${plural} of coffee on the desk! ${howManyCups} ${plural} of coffee!`);
        howManyCups--;
        plural = howManyCups > 1 ? 'cups' : 'cup';
        var result = `Pick one up, drink the cup, ${howManyCups} ${plural} of coffee on the desk!`;
        if (howManyCups === 0)
            result = 'Pick it up, drink the cup, no more coffee left on the desk!';
        console.log(result);
    }
}

function countOccurrencesOfSubstring(fullString, subString) {
    if (typeof fullString !== 'string' || typeof subString !== 'string')
        throw new Error('not passing string to countOccurrencesOfSubstring()');
    var times = 0;
    var i = 0;
    while (fullString.length > 0) {
        if (fullString.indexOf(subString) === 0) {
            times++;
        }
        fullString = fullString.substring(1, fullString.length);
    }
    return times;
}

function randomizeSentences(paragraph) {
    if (typeof paragraph !== 'string')
        throw new Error('not passing string to randomizeSentences()');
    //split the paragraph with punctuation marks.
    var punMarks = ['!', '?', '.'];
    var sentences = [''];
    var sentence = '';
    for (var i = 0; i < paragraph.length; i++) {
        var char = paragraph.substring(i, i + 1);
        if (punMarks.indexOf(char) > -1) {
            sentence += char;
            sentence = sentence.trim();
            sentence += ' ';
            sentences.push(sentence);
            sentence = '';
            continue;
        }
        sentence += char;
    }

    //randomize the sentences.
    var result = '';
    while (sentences.length > 0) {
        var randomNumber = Math.floor(Math.random() * sentences.length);
        result += sentences.splice(randomNumber, 1);
    }

    //print randomized sentences.
    console.log(result);
}

try {
    console.log('=========first function: sumOfSquares');
    console.log(sumOfSquares(5, 3, 10));
    console.log('\n=========second function: sayHelloTo');
    sayHelloTo('Ben', 'Cheng', 'Mr.');
    console.log('\n=========third function: cupsOfCoffee');
    cupsOfCoffee(5);
    console.log('\n=========fourth function: countOccurrencesOfSubstring');
    console.log(countOccurrencesOfSubstring('Helllllllo, class!', 'll'));
    console.log('\n=========fifth function: randomizeSentences');
    randomizeSentences("Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.");
}
catch (exception) {
    console.log(exception.name);
    console.log(exception.message);
}