const math = require('./Modules/Mathfn');
const log=require('./Modules/logfile');

math.add(15,15,function(err,data){
    if(err)
        throw err;
    else
    log(data,'add');
})

math.sub(15,10,function(err,data){
    if(err)
        throw err;
    else
    log(data,'sub');
})

math.multiply(5,5,function(err,data){
    if(err)
        throw err;
    else
    log(data,'mul');
})

math.div(15,15,function(err,data){
    if(err)
        throw err;
    else
    log(data,'div');
})