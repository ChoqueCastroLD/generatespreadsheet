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
    
    let buffer = await generate(headers, data).xlsx();
    
    require('fs').writeFileSync('myexcel.xlsx', buffer);
    console.log(`Excel generation complete`);
 }
 main();
````