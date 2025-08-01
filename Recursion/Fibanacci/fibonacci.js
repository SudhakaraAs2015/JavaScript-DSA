function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(3));
console.log(recursiveFibonacci(7));
console.log(recursiveFibonacci(8));

// Big-O = (2 power n)
