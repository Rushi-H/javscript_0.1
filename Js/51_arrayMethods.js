let arr =['rushi','asif','rutik']
 arr.push('revan','kunal')

console.log();
console.log(arr);

let pop1 = arr.pop('revan')

console.log(pop1);
console.log(arr);

console.log(arr.toString());

let s = arr.toString()
console.log();

//concat
let names = ['rushi','rutik']
let surnames= ['honkande','thavare']
let moreNames =['revan','asif']
let join = names.concat(surnames) //concate single array
console.log(join);
let join2 = names.concat(surnames,moreNames);//here we can multiple array concat
console.log(join2);

console.log(join2.unshift('mahajan'));
console.log(join2);

//slice 

let arr4 =['rushi','asif','rutik']

console.log(arr4.slice(0));


//splice
let arr5 = [10,20,54,85,45,60]
//add element 
// arr5.splice(2,0,200);

//delete element 
// arr5.splice(2,1); 



//replace element 
// arr5.splice(2,1,200);
console.log(arr5);

//like slice 

arr5.splice(2)
console.log(arr5);




