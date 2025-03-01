function add(a, b, callback) {
    if (isNaN(a) || isNaN(b)) {
        console.log("Invalid input: Both value must be numbers.");
      }
  else{
    callback(null,a+b);
}
  }
  function sub(a, b, callback) {
    if (isNaN(a) || isNaN(b)) {
        console.log("Invalid input: Both value must be numbers.");
      }
      else{
    callback(null,a-b);
      }
  }
  function multiply(a, b, callback) {
    if (isNaN(a) || isNaN(b)) {
        console.log("Invalid input: Both value must be numbers.");
      }
      else{
    callback(null,a*b);
      }
  }
  function div(a, b, callback) {
    if (isNaN(a) || isNaN(b)) {
        console.log("Invalid input: Both value must be numbers.");
      }
    if (b != 0) {
    callback(null,a/b);}
    else
    callback(new Error('Divide by 0 Error:' + a + '/' + b))
  }

  module.exports = {
    add,
    sub,
    multiply,
    div
};