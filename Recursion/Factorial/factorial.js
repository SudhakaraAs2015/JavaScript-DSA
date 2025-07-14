// Recursion is process of sloving problem or calling function itself
function recursiveFactorial (n){
    if(n===0){
        return 1
    }
   
    return n * recursiveFactorial(n-1);
};

console.log(recursiveFactorial(6));

// Big-O = O(n)
// If n increases the number of instructions increases at the same time.
