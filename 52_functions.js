// Normal Function 
function sum(a,b){
    return a+b;
}
console.log(sum(5,6));


//arrow function

const sum1 = (a,b) => {
    return a+b
}
console.log('the sum is ',sum(4,6));


const multi = (a,b) =>{
    console.log(`the multiplication of ${a} and ${b} is `,a*b);
    
}

multi(5,6)

// function without params

const greet = () => {
    console.log('hello, good morning ');
    
}
greet() // function call 

// functions with the single line
const greet2 = () => console.log('hello how are you ?');

greet2() // function call 




