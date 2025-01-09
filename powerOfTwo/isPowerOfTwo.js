function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(7));

 // Big- O =O(log n) // Halfing the input in each iteration


 // Bitwise Power of Two

 function isPowerOfTwoBitwise(n) {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1) === 0);
}

console.log(isPowerOfTwoBitwise(4)); // true
console.log(isPowerOfTwoBitwise(5)); // false
console.log(isPowerOfTwoBitwise(7)); // false

// Big-O = O(1)


