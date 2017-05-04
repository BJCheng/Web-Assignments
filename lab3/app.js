const fileData = require('./fileData');
const textMetrics = require('./textMetrics');

let fileName = 'chapter3';

// 1. Check if chapter1.result.json exists; if it does, query and print the resulting object
let ifGetJSON = fileData.getFileAsJSON(fileName + '.result.json');
ifGetJSON.then((data) => {
    console.log(data);
}).catch((err) => {  // 2. If no result is found, perform getFileAsString(chapter1.txt)
    fileData.getFileAsString(fileName + '.txt').then((text) => {  // 3. simplify the text and store the result in chapter1.debug.txt
        let simplifiedText = textMetrics.simplify(text);
        fileData.saveStringToFile(fileName + '.debug.txt', simplifiedText);
        return simplifiedText;
    }).then((simplifiedText) => {  // 4. Run the text metrics and store those results in chapter1.result.json
        return textMetrics.createMetrics(simplifiedText);
    }).then((resultJSON) => {
        fileData.saveJSONToFile(fileName + '.result.json', resultJSON);
        return resultJSON;
    }).then((result) => {  // 5. Print the resulting metrics
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
});