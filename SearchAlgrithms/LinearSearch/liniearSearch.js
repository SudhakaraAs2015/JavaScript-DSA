function linearSearch(arr,target){
    for(let i =0; i<arr.length; i++){
        if(arr[i] === target){
            console.log(arr[i]);
            return i
        }
    }
    return -1;
};

console.log(linearSearch([-2,3,5,1,3,5],1));
console.log(linearSearch([-2,3,5,1,3,5],5));

//Big-O = O(n)  Linear