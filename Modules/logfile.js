function log(res,resType){
    if(resType=='add')
        console.log(`Addition result-${res}`)
    if(resType=='sub')
        console.log(`Subtraction result-${res}`)
    if(resType=='mul')
        console.log(`Mulitplication result-${res}`)
    if(resType=='div')
        console.log(`Division result-${res}`)
}

module.exports=log;