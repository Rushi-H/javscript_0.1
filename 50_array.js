
let marks = [20,26,25,33,50,57]

console.log(marks);
marks[3]=55;
console.log(marks); // [20, 26, 25, 55, 50, 57]



//for of 
let heros = ['rev','iron man', 'batman','superman']
for (let i of heros){
    console.log(i);
    
}


//standerted 
for (let idx = 0; idx<heros.length; idx ++){
    console.log(heros[idx]);
    
}

// 
for (let hero of heros){
    console.log(hero.toUpperCase());
    
}

let m