const path = require('path');
const fs = require('fs');

function generateCsv(headers = [], rows = [], tempFilename = '') {
    return new Promise(async (resolve, reject) => {
        try { 
            let filepath = path.join(__dirname, tempFilename);
            
            let output = headers.join(', ') + '\n';

            rows.map(row => {
                    let temp = headers.map( v => row[v] );

                    output += temp.join(', ') + '\n';
            })

            let buffer = fs.readFileSync(filepath);
            fs.rmdirSync(filepath, {recursive: true}); 
            resolve(buffer);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = generateCsv;