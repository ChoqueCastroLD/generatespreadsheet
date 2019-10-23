const generateXlsx = require('./generators/xlsx');
const generateXls = require('./generators/xls');
const generateCsv = require('./generators/csv');
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
    return {
        xlsx:   ()=>generateXlsx(headers, items),
        xls:    ()=>generateXls(headers, items),
        csv:    ()=>generateCsv(headers, items)
    }
}

module.exports = generate;