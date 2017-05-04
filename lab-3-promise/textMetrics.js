// 1. Convert the text to lowercase
// 2. Remove all non-alphanumeric characters (?.!'," and so on)
// 3. Convert all white space to simple spaces (new lines become spaces; tabs become spaces, etc)
// 4. Return the result.
let simplify = (text) => {
    let simplifyText = text.toLowerCase();
    let nonAlphanumericRegex = /[^0-9A-Za-z\s$]/g;
    let newLineRegex = /\n/g;
    let spaceRegex = /[\s\n\t]+/g;
    simplifyText = simplifyText.replace(nonAlphanumericRegex, '');
    simplifyText = simplifyText.replace(spaceRegex, ' ');
    return simplifyText;
}

// {
//     totalLetters: total number of letters in the text,
//     totalWords: total number of words in the text,
//     uniqueWords: total number of unique words that appear in the text,
//     longWords: number of words in the text that are 6 or more letters long,
//     averageWordLength: the average number of letters in a word in the text,
//     wordOccurrencesMap: a dictionary of each word (lowercased, no punctuation) and how many times each word occurs in the text.
//  }
let createMetrics = (text) => {
    let totalLetters = 0;
    let totalWords = 0;
    let longWords = 0;
    let wordOccurrencesMap = new Map();
    let words = text.split(/\s/g);
    words.forEach((word) => {
        word.split('').forEach((letter)=>{
            totalLetters++;
        });

        if(wordOccurrencesMap.has(word)) 
            wordOccurrencesMap.set(word, wordOccurrencesMap.get(word)+1);
        else
            wordOccurrencesMap.set(word, 1);

        if(word.length>5) longWords++;
    });
    totalWords = words.length;
    let averageWordLength = totalLetters/totalWords;
    let uniqueWords = wordOccurrencesMap.size;
    let wordOccurrences = {};
    wordOccurrencesMap.forEach((value, key)=>{
        wordOccurrences[key] = value;
    });
    let result = 
    { 
        "totalLetters": totalLetters,
        "totalWords": totalWords,
        "uniqueWords": uniqueWords,
        "longWords": longWords,
        "averageWordLength": averageWordLength,
        "wordOccurrences": wordOccurrences
    };
    return result;
}

exports.simplify = simplify;
exports.createMetrics = createMetrics;