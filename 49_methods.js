let str = " Rushikesh Shashikant Honkande";
// str = str.toLowerCase
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
// console.log(str);
// console.log(str);
let str1 = " appa"
console.log(str.charAt(5)); //find chatrcter at index of str
console.log(str.slice(5,10));//slicing

//concating 
console.log(str + str1);
console.log(str.concat(str1));

// replacing 
console.log(str.replace('h','o'));// replace first letter 
console.log(str.replaceAll('h','o'));// replace all letter   Rusoikeso Soasoikant Honkande

//original strings are immutable 
//to change the values of string we have to assing another string 
str2 = str.replaceAll('i','g')
console.log(str2);


