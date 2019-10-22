const generateXlsx = require('./generators/xlsx');
/**
 * 
 * Usage example:
 * 
 * const generate = require('generatespreadsheet');
 * 
 * async function main(){
 * let headers = ['name', 'email', 'phone'];
 * 
 * let data = [
 * {name: 'Luis', email: 'luis@mail.com', phone: '95135'},
 * {name: 'Luis', email: 'luis@mail.com', phone: '95135'},
 * {name: 'Luis', email: 'luis@mail.com', phone: '95135'}
 * ]
 * 
 * let buffer = await generate(headers, data).xlsx();
 * 
 * require('fs').writeFileSync('myexcel.xlsx', buffer);
 * console.log(`Excel generation complete`);
 * 
 * }
 * main();
 * 
 * @param {Array<string>} headers 
 * @param {Array<object>} items 
 */
function generate(headers = [], items = []){
    let hash = (Date.now() + '_' + ((Math.random()*100).toString())).substring(0,20);

    let tempFilename = hash + '.xlsx';

    return {
        xlsx:   ()=>generateXlsx(headers, items, tempFilename)
        //xls:    ()=>generateXls(headers, items, tempFilename),
        //csv:    ()=>generateCsv(headers, items, tempFilename)
    }
}

module.exports = generate;