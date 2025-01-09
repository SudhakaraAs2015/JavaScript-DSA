function primeNumber(n){
    if(n<2){
        return false;
    }

    for(let i = 2; i<n; i++){
        if(n%i ===0){
            console.log(`i =${i} n= ${n}`);
            
            return false;
            
        }
    }
    return true;
};
console.log(primeNumber(4));
// Big- O =O(n) // Linear time complexity


// Optimal Solution

function primeNumber(n){
    if(n<2){
        return false;
    }

    for(let i = 2; i<= Math.sqrt(n); i++){
        if(n%i ===0){
            console.log(`i =${i} n= ${n}`);
            
            return false;
            
        }
    }
    return true;
};
console.log(primeNumber(4));

// Big- O =O(sqrt(n)) // Linear time complexity