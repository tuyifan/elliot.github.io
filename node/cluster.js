const cluster = require('cluster')
const numCPUs = require('os').cpus().length
let s1 = Date.now();
function fibon (i) {
  return i === 0 ? 0 : 
    i === 1 ? 1 : fibon(i - 1) + fibon(i -2)
}

// 单线程

const arr = [44, 36, 43, 42, 31, 46]
function calculate (seq, taskId) {
  return new Promise((resolve, reject) => {
    console.log(`Task ${taskId} starts calculating`)
    const start = Date.now();
    const result = fibon(seq);
    console.log(`the result of ${taskId} is ${result}, taking ${Date.now() - start} ms.`)
    return resolve(result)
  })
}

// (async function(){
//   console.time('main')
//   const results = await Promise.all(arr.map(calculate));
//   results.forEach((result, index) => console.log(`task ${index}'s result is ${result}`))
//   console.timeEnd('main')
// })()

// 多线程
if (cluster.isMaster) {
  let endTaskNum = 0;
  console.time('cluster main')
  console.log(`[master]# Master starts running. pid:${process.pid}`)
  for (let i = 0; i < numCPUs && i < arr.length; i++) {
    const worker = cluster.fork();
    worker.send(arr[i]);
  }
  cluster.on('message', (worker, message, handle) => {
    console.log(`[Master]#Worker ${worker.id}: ${message}`);
    endTaskNum++;
    if (endTaskNum === arr.length){
      console.timeEnd('cluster main');
      cluster.disconnect();
    } 
  })
  cluster.on('exit', (worker, code, signal) => {console.log(`[Master]#Worker ${worker.id} died`)})
}
else {
  process.on('message', seq => {
    console.log(`[worker]#${process.pid} starts calculating`)
    const start = Date.now();
    const result = fibon(seq);
    console.log(`[Worker]# The result of task ${process.pid} is ${result}, taking ${Date.now() - start} ms.`)
    process.send('My task has ended.')
  })
}