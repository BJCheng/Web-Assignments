// find the index.js out of each sub folders
// run the index.js with student's name before the output
const fs = require('fs');
const path = require('path');

let folders = fs.readdirSync('./submissions');
folders = folders.filter((folder) => {
    return folder !== '.DS_Store'
});

let result = {};
let failList = [];
let printTimes = 0;

folders.forEach((folder) => {
    try {
        iterate(path.resolve('submissions', folder));
    } catch (e) {
        let fail = {};
        fail.folder = path.resolve('submissions', folder);
        fail.reason = e.message;
        failList.push(fail);
    }
});
console.log('===fail list===');
failList.forEach((fail) => {
    console.log('fail folder: ', fail.folder);
    console.log('fail reason: ', fail.reason);
});
console.log('total print times', printTimes);
console.log('total fail number', failList.length);


// iterate through each sub folders under submissions
function iterate(currentPath) {
    let result = [];
    var excludingFiles = ['.DS_Store', '.vscode', '__MACOSX'];
    if (currentPath.toLowerCase().endsWith('index.js')) {
        console.log(`====${currentPath}====`);
        let code = fs.readFileSync(currentPath).toString();
        let requireFile = currentPath.replace('index.js', 'printShape.js');
        if (code.includes(`require('./printShape')`)) {
            code = code.replace(`require('./printShape')`, `require('${requireFile}')`);
        }
        else if (code.includes(`require("./printShape")`)) {
            code = code.replace(`require("./printShape")`, `require('${requireFile}')`);
        }
        else if (code.includes(`require('./printShape.js')`)) {
            code = code.replace(`require('./printShape.js')`, `require('${requireFile}')`);
        }
        else if (code.includes(`require('./printShapes')`)) {
            requireFile = currentPath.replace('index.js', 'printShapes.js');
            code = code.replace(`require('./printShapes')`, `require('${requireFile}')`);
        }
        else if (code.includes(`require("./printShape.js")`)) {
            code = code.replace(`require("./printShape.js")`, `require('${requireFile}')`);
        }
        else if (code.includes(`require('./printShap.js')`)) {
            requireFile = currentPath.replace('index.js', 'printShap.js');
            code = code.replace(`require('./printShap.js')`, `require('${requireFile}')`);
        }
        else if (code.includes(`require("./printShapes")`)) {
            requireFile = currentPath.replace('index.js', 'printShapes.js');
            code = code.replace(`require("./printShapes")`, `require('${requireFile}')`);
        }
        else if (code.includes(`require('./printShapes.js')`)) {
            requireFile = currentPath.replace('index.js', 'printShapes.js');
            code = code.replace(`require("./printShapes.js")`, `require('${requireFile}')`);
        }
        else if (code.includes(`require("./printShapes.js")`)) {
            requireFile = currentPath.replace('index.js', 'printShapes.js');
            code = code.replace(`require("./printShapes.js")`, `require('${requireFile}')`);
        }
        else if (code.includes(`require("./printShap.js")`)) {
            requireFile = currentPath.replace('index.js', 'printShap.js');
            code = code.replace(`require("./printShap.js")`, `require('${requireFile}')`);
        }
        eval(code);
        printTimes++;
        console.log('\n');
        console.log('\n');
        return;
    }
    let files;
    if (fs.lstatSync(currentPath).isDirectory()) {
        files = fs.readdirSync(currentPath);
        files.forEach((dir) => {
            if (excludingFiles.indexOf(dir) < 0 && fs.lstatSync(currentPath).isDirectory()) {
                iterate(`${currentPath}/${dir}`);
            }
        });
    }
}