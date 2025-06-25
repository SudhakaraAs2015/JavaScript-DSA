function fibanacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibanacci(2));
console.log(fibanacci(3));
console.log(fibanacci(11));
console.log(fibanacci(4));

// Big-O = O(n)
// Other Approacch
// function fib(n) {
//   if (n <= 0) {
//     return 0;
//   }
//   if (n == 1) {
//     return 1;
//   }
//   let a = 0,
//     b = 1,
//     temp;

//     for(let i =2; i<=n; i++){
//       temp = a+b
//       a = b;
//       b = temp;
//     }
//     return b;
// };

// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(11));
// console.log(fib(4));

//Big = O(n)
