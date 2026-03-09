let marks = [97,85,91,75,35,68,99]
 let toppers = marks.filter((val) =>{
return val>90;
})

console.log(toppers);

///////////////////////////////////

let num = prompt('enter a number from 1 to 10:');

let arr = [];

for ( i=1; i<=num; i++){
    arr[i-1] = i
}
console.log(arr);

/////////////////////////////
let sum = arr.reduce((res , curr) =>{
    return res + curr
})

console.log(`the result will be ${sum}`);


let fact = arr.reduce((res , curr) =>{
    return res * curr;
})

console.log(`the factorial will be ` , fact);