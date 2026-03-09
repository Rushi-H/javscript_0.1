let arr = [2,5,3,4,2,2,4,102,1]

const output = arr.reduce((res,curr) =>{
    return res+curr;
});
console.log(output);


// find largest number 

const findLargerNumber = arr.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
});
console.log(findLargerNumber);
