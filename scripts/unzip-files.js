const wsNames = require('./ws');
const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

fs.readdir('./submissions', (err, files) => {
    let count = 0;
    let deleteCount = 0;
    files.forEach((fileName) => {
        // iterate through wsNames
        let isWs = false;
        for (let i = 0; i < wsNames.length; i++) {
            let name = wsNames[i];
            if (fileName.toLowerCase().indexOf(name.toLowerCase()) > -1) {
                var zip = new AdmZip(`./submissions/${fileName}`);
                isWs = true;
                count++;
                zip.extractAllTo(`${__dirname}/submissions/${fileName.replace('.zip', '')}/`, /*overwrite*/true);
                break;
            }
        };
        // if (!isWs) {
        //     deleteCount++;
        //     console.log('about to delete file: ', `${__dirname}/submissions/${fileName}`);
        //     fs.unlink(`${__dirname}/submissions/${fileName}`, (err) => {
        //         console.error(`${__dirname}/submissions/${fileName} delete failed: `, err);
        //     });
        // }
    });
    console.log(count);
    console.log(deleteCount);
});