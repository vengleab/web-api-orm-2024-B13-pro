// function printDelayMessage(message, delay = 0) {
//   setTimeout(() => {
//     console.log(message);
//   }, delay);
// }

// promise
function printDelayMessage(message, delay = 0) {
  // return new Promise((resolve, reject)=>{
  return new Promise((done, error)=>{
    setTimeout(() => {    
      console.log(message);
      done("test")
    }, delay)
  });
}



// printDelayMessage("Hello1")
// printDelayMessage("Hello2", 5_000)
// printDelayMessage("Hello3", 4_000)
// printDelayMessage("Hello4", 3_000)
// printDelayMessage("Hello5", 2_000)

// printDelayMessage("Hello1")
//   .then(() => {
//     return printDelayMessage("Hello2", 5_000)
//   }).then(() => {
//     return printDelayMessage("Hello3", 4_000)
//   }).then(()=> {
//     return printDelayMessage("Hello4", 3_000)
//   }).then(()=> {
//     return printDelayMessage("Hello5", 2_000)
//   })

// printDelayMessage("Hello1")
//   .then((data) => {
//     console.log("Data:" + data);
//     printDelayMessage("Hello2", 5_000).then(() => {
//       printDelayMessage("Hello3", 4_000).then(() => {
//         printDelayMessage("Hello4", 3_000).then(() => {
//           printDelayMessage("Hello5", 2_000)
//         })
//       })
//     })
//   })

(async () =>{
  await printDelayMessage("Hello1")
await printDelayMessage("Hello2", 5_000)
await printDelayMessage("Hello3",  4_000)
await printDelayMessage("Hello4", 3_000)  
await printDelayMessage("Hello5", 2_000)  
})()
// main()