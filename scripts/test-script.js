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
    // try {
    iterate(path.resolve('submissions', folder));
    // } catch (e) {
    //     let fail = {};
    //     fail.folder = path.resolve('submissions', folder);
    //     fail.reason = e.message;
    //     failList.push(fail);
    // }
});
// console.log('===fail list===');
// failList.forEach((fail) => {
//     console.log('fail folder: ', fail.folder);
//     console.log('fail reason: ', fail.reason);
// });
// console.log('total print times', printTimes);
// console.log('total fail number', failList.length);


// iterate through each sub folders under submissions
function iterate(currentPath) {
    var excludingFiles = ['.DS_Store', '.vscode', '__MACOSX'];
    if (currentPath.toLowerCase().endsWith('printshape.js') ||
        currentPath.toLowerCase().endsWith('printshapes.js') ||
        currentPath.toLowerCase().endsWith('printshap.js')
    ) {
        console.log(`====${currentPath}====`);
        let thisPrintShapes = require(currentPath);
        testScript(thisPrintShapes);
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

function testScript(printShapesModule) {
    console.log('===throwing a negative error===');
    try {
        console.log('triangle:');
        printShapesModule.triangle(-1);
    } catch (e) {
        console.log(e)
    }
    try {
        console.log('square:');
        printShapesModule.square(-1);
    } catch (e) {
        console.log(e)
    }
    try {
        console.log('rhombus:');
        printShapesModule.rhombus(-1);
    } catch (e) {
        console.log(e)
    }
    console.log('===throwing a negative error complete===');

    console.log();
    console.log('===throwing a null error===');
    try {
        console.log('triangle:');
        printShapesModule.triangle();
    } catch (e) {
        console.log(e)
    }
    try {
        console.log('square:');
        printShapesModule.square();
    } catch (e) {
        console.log(e)
    }
    try {
        console.log('rhombus:');
        printShapesModule.rhombus();
    } catch (e) {
        console.log(e)
    }
    console.log('===throwing a null error complete===');

    console.log();
    console.log('===throwing an odd rhombus error===');
    try {
        console.log('rhombus:');
        printShapesModule.rhombus(3);
    } catch (e) {
        console.log(e)
    }
    console.log('===throwing an odd rhombus error complete===');
    console.log();
    console.log();
}