const cluster = require('cluster');
const os = require('os');



const startWorker = (callback) => {    
  if (cluster.isPrimary) {
    console.log(`Master ${process.pid} is running`);

    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
      cluster.fork();
    });

    if (callback) {
      callback();
    }
  } else {
    console.log(`Worker ${process.pid} started`);
  }
};

startWorker(() => {
  console.log('All workers have been forked.');
});