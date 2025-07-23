function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Checking index ${i}: value = ${arr[i]}`);
    if (arr[i] === target) {
      console.log(`Found ${target} at index ${i}`);
      return i;
    }
  }
  console.log(`${target} not found in the array.`);
  return -1;
}

console.log(linearSearch([-2, 3, 5, 1, 3, 5], 1));
console.log(linearSearch([-2, 3, 5, 1, 3, 5], 5));

// Big-O = O(n)  Linear
