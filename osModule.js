const os = require('os');


const osName = os.type();
console.log('Operating System:', osName);


const hostName = os.hostname();
console.log('Hostname is:', hostName);


const cpuArchitecture = os.arch();
console.log('CPU Architecture is:', cpuArchitecture);

const freeMemory = os.freemem();
console.log('Free Memory space:', freeMemory);


const totalMemory = os.totalmem();
console.log('Total Memory space:', totalMemory);


const uptime = os.uptime();
console.log('Uptime details:', uptime);


const networkInterfaces = os.networkInterfaces();
console.log('Network Interfaces:', networkInterfaces);


const tmpdir = os.tmpdir();
console.log('tmpdir:', tmpdir);