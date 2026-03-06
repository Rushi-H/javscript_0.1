// for given araay of number print the square using foreach loop


// here we have used function is directly into parametere
let nums = [2,4,5,2,3,5,7]
nums.forEach((nums) => {
    console.log(nums *nums); //nums**2
     
})
//we can make seprate function and pass in foreach
console.log('diff ------------------------------------');

const sqaure =(nums) => {
    console.log(nums *nums); //nums**2
}

nums.forEach(sqaure);