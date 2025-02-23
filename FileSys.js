const fs=require('fs');

console.log("creating new sample input file");



fs.readFile('SampleTestFile.txt', "utf8", function (err, data) {   
    if(err) 
        throw err;
    console.log(data);
});

console.log('readFile testing done and the sample read file opened');

let data = "\n appending/adding in next lineLearn Node.js";


fs.appendFile(
    "SampleTestFile.txt", data, "utf8",   
    function (err) {
        if (err) throw err;
        console.log("Data is appended to file successfully.");
    }
);

