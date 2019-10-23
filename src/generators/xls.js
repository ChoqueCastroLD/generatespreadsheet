const toExcel = require('to-excel').toExcel;

const path = require('path');
const fs = require('fs');

function generateXls(headers = [], rows = []) {
    return new Promise(async (resolve, reject) => {
        try {
            let tempFilename = (Date.now() + '_' + ((Math.random()*100).toString())).substring(0,20)+'.xls';

            let filepath = path.join(__dirname, tempFilename);

            let rawHeaders = headers;

            headers = [];
            rawHeaders.map( h => headers.push({label: h, field: h}) );

            let content = toExcel.exportXLS(headers, rows, tempFilename);

            fs.writeFileSync(tempFilename, content);
            let buffer = fs.readFileSync(filepath);
            fs.rmdirSync(filepath, {
                recursive: true
            });
            resolve(buffer);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = generateXls;