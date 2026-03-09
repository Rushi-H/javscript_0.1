//Condiotional Statements

//if statement

let L = "yellow";
let color;

if (L === 'dark'){
    color = "black";


}
if (L === 'light'){
    color = 'white';
}
console.log(color);


// if-else statement 


if (L === "light "){
                    
    console.log('you are on light L');
    
}else if (L === "dark"){

        console.log('you are on dark L');
        
}else{
    console.log('this is not a L pls set a L ');
}
//even odd number

const num = 41;
if(num %2 === 0){
    console.log("its even num");
    
}else{
    console.log(`number ${num} a odd num`);
    

}


//ternary operators
let age = 22
let  result = age<18 ? ' not adult' : ' adult'

console.log(result);


// Switch





//practice question



let y = prompt('enter a number');