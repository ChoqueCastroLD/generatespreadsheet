const path = require('path');
const fs = require('fs');

function generateCsv(headers = [], rows = []) {
    return new Promise(async (resolve, reject) => {
        try { 
            let tempFilename = (Date.now() + '_' + ((Math.random()*100).toString())).substring(0,20)+'.csv';

            let filepath = path.join(__dirname, tempFilename);
            
            let output = headers.join(', ') + '\n';

            rows.map(row => {
                    let temp = headers.map( v => row[v] );

                    output += temp.join(', ') + '\n';
            })

            fs.writeFileSync(filepath, output);
            let buffer = fs.readFileSync(filepath);
            fs.rmdirSync(filepath, {recursive: true}); 
            resolve(buffer);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = generateCsv;