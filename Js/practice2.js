let input = prompt('enter your name');
console.log(input);
let a = input.replaceAll(' ','')
let userName = "@"+a+ a.length + getRandomInt(100);
console.log(userName);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}