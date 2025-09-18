const climbingStair = (n) => {
  let noOfWays = [1, 2];
  for (let i = 2; i < n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
    // console.log(noOfWays[i]);
  }
  return noOfWays[n - 1];
};
console.log(climbingStair(5));

//T.C = O(n)
//S.C = O(n) 
