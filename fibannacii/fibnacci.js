function fibanacci(n){
   let fib = [0,1];
   for(let i =2 ; i<n ; i++){
    fib[i] = fib[i-1]+ fib[i-2];
   }
   return fib;
    
    
}

console.log(fibanacci(2));
console.log(fibanacci(1));
console.log(fibanacci(3));
console.log(fibanacci(11));

// Big-O = O(n)

// function fibonacci(n) {
//     if (n <= 1) {
//       return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
  
//   console.log(fibonacci(3));  // Output: 55
  

