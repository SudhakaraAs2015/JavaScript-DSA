function quickSorting(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSorting(left),pivot, ...quickSorting(right)];
}
console.log(quickSorting([8, 20, -2, 4, -6]));

//Worst case - O(n^2)
//Avg Case -O(logn)