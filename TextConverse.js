const textconv = require('./Modules/TextTransform');
const log=require('./Modules/logfile');

textconv.toUpperCase("hello nodejs",function(err,data){
    if(err)
        throw err;
    else
        console.log('upperCaseString:', data); 
})
textconv.toLowerCase("Hello NodeJS",function(err,data){
    if(err)
        throw err;
    else
        console.log('LowerCaseString:', data); 
})
textconv.transformText("",function(err,data){
    if(err)
        throw err;
    else
        console.log('Enter Text.It should not be Empty!!!', data); 
})
