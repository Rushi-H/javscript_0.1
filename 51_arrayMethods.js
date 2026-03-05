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


