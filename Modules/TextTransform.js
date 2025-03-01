function transformText(text, callback) {
    if(text=="")
    {
        console.log("Text cannot be empty!!!");
    }
    else{
     callback(null,text);
    }
  }
 
  
  function toUpperCase(text,callback) {
    callback(null,text.toUpperCase());
  }
  


 function toLowerCase(text,callback) {
        callback(null,text.toLowerCase());
      }


  module.exports = {
    transformText,
    toUpperCase,
    toLowerCase  
};