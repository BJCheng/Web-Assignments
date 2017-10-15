// const fs = require('fs');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));

let getFileAsString = (path) => {
    if (!path) reject('no path provided');

    fs.readFileAsync(path, 'utf-8').then((data) => {
        return data;
    }).catch((err)=>{
        throw err;
    });
    // return new Promise((resolve, reject) => {
    //     if (!path) reject('no path provided');

    //     fs.readFile(path, 'utf-8', (err, data) => {
    //         if (err) reject(err);

    //         resolve(data);
    //     })
    // });
}

let getFileAsJSON = (path) => {
    return fs.readFileAsync(path, 'utf-8').then((data) => {
        try {
            let dataJSON = JSON.parse(data);
            return (dataJSON);
        } catch (error) {
            throw new Error(error);
        }
    }).catch((err) => {
        throw new Error(err);
    });
    // return new Promise((resolve, reject) => {
    //     fs.readFile(path, 'utf-8', (err, data) => {
    //         if (err)
    //             reject(err);

    //         try {
    //             let dataJSON = JSON.parse(data);
    //             resolve(dataJSON);
    //         } catch (error) {
    //             reject(error)
    //         }
    //     });
    // });
}

let saveStringToFile = (path, text) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, text, 'utf-8', (err) => { if (err) reject(err); });
    });
}

let saveJSONToFile = (path, text) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, JSON.stringify(text), 'utf-8', (err) => { if (err) reject(err); });
    });
}

exports.getFileAsString = getFileAsString;
exports.getFileAsJSON = getFileAsJSON;
exports.saveStringToFile = saveStringToFile;
exports.saveJSONToFile = saveJSONToFile;