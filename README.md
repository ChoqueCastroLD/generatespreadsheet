# generatespreadsheet
A Nodejs module that'll help you generate xlsx files from your javascript app


Usage example:

````javascript 
 const generate = require('generatespreadsheet');
 
 async function main(){
    let headers = ['name', 'email', 'phone'];
    
    let data = [
    {name: 'Luis', email: 'luis@mail.com', phone: '95135'},
    {name: 'Luis', email: 'luis@mail.com', phone: '95135'},
    {name: 'Luis', email: 'luis@mail.com', phone: '95135'}
    ]
    
    // This can vary to xls, csv or xlsx 
    let buffer = await generate(headers, data).xlsx();
    
    // or if you want the 3 type of files
    let generator = await generate(headers, data);

    let xlsxBuffer = await generator.xlsx();
    let xlsBuffer = await generator.xls();
    let csvBuffer = await generator.csv();
    
    require('fs').writeFileSync('myexcel.xlsx', buffer);
    console.log(`Excel generation complete`);
 }
 main();
````