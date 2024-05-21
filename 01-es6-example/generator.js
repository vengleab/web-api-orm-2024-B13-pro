// function getListOfNumbers(start, end) {
//   let arr = []
//   for (let index = start; index <= end; index++) {
//     arr.push(index)
//   }
//   return arr
// }

function* getListOfNumbers(start, end) {
  while (start <= end) {
    yield start++
  }
  
}

const myNumber= getListOfNumbers(1, 5)
for(const number of myNumber){
  console.log(number)
}


// console.log(myNumber);
// console.log(myNumber.next());
// console.log(myNumber.next());

// console.log(myNumber.next());
// console.log(myNumber.next());
// console.log(myNumber.next());

// console.log(myNumber.next());
// console.log(myNumber.next());
// console.log(myNumber.next());

// console.log(myNumber.next());
// console.log(myNumber.next());
// console.log(myNumber.next());

// console.log(myNumber.next());
// console.log(myNumber.next());
// console.log(myNumber.next());

// console.log(myNumber.next());
// console.log(myNumber.next());
// console.log(myNumber.next());

// console.log(myNumber.next());
// console.log(myNumber.next());
// console.log(myNumber.next());

// console.log(myNumber.next());
// console.log(myNumber.next());
// console.log(myNumber.next());

// console.log(myNumber.next());

// console.log(getListOfNumbers(1, 100000));
// console.log(getListOfNumbers(11, 20));