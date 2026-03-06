// find vowles from strings with functions

const findVowels = (str) => {
    let count =0;
    for (i of str){
        if(i === 'a'|| i=== 'e'|| i ==='i' || i==='o'|| i==='u'){
             count ++ ;
        }
    }
   console.log(count);
   return count ++;
   
}

findVowels('rushikesh')
findVowels('xyz')