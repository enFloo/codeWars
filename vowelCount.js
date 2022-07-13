function getCount(str) {
    let count = 0;

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for(let i of str){
     if(vowels.includes(i))
          count++;
    }
 
return count;
}

getCount('Dragonflame')