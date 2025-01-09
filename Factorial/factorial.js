// 2! = 2*1 = 2
// 0! = 1
// 1! =1
//4! =4*3*2*1 = 24

function factorial (n){
    let fact =1;
    for (let i =2; i<=n; i++){
        fact = fact*i;
    }
    return fact;
};
console.log(factorial(4));

//Big-O = O(n)
// Value of n icreases the number of times fact = fact* i executes
console.log(4%4);