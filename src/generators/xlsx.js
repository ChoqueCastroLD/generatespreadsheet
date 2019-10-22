const jexcel = require('xls-write');
const path = require('path');
const fs = require('fs');

/**
 * 
 * @param {Array<string>} headers
 * @param {Array<object>} items
 */
function generateXlsx(headers = [], rows = [], tempFilename = '') {
    return new Promise(async (resolve, reject) => {
        
        let filepath = path.join(__dirname, tempFilename);
        
        let rawHeaders = headers;
        headers = [];
        rawHeaders.forEach(h => {
            let temp = {};
            
            temp[h] = h;
            headers.push(temp);
        });

        var data = {
            sheets: [{
                header: headers,
                items: rows,
                sheetName: tempFilename,
            }, ],
            filepath,
        };

        jexcel.writeXlsx(data, (err) => {
            if (err)
                reject(err);
            else {
                try {
                    let buffer = fs.readFileSync(filepath);
                    fs.rmdirSync(filepath, {recursive: true});  
                    resolve(buffer);
                } catch (error) {
                    reject(err);
                }
            }
        });
    });
}

module.exports = generateXlsx;