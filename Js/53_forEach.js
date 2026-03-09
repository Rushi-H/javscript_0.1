//for each

let arr = [1,3,4,5,6];
// arr.forEach(function printVal(val) {
// console.log(val);
// });
arr.forEach((val) => {
console.log(val);
});

let arr1 = ["pune",'solapur','mumbai']
arr1.forEach((val) => {
console.log(val);
console.log(val.toUpperCase()); // to upper case each element 
});

//we can use 3 params in foreach 

arr1.forEach((val, idx , arr) => {
console.log(val.toUpperCase(),idx, arr);

});