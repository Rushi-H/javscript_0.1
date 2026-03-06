//to find even number with using filter
let arr = [1,2,3,4,5,6,7];

let evenArr = arr.filter((val) => {
    return val % 2 === 0 ;
});
console.log(evenArr); //[ 2, 4, 6 ]

//it will create array of got number by after true condition


//to find odd number with using filter
let oddArr = arr.filter((val) => {
    return val % 2 !== 0 ;
});
console.log(oddArr);  //[ 1, 3, 5, 7 ]