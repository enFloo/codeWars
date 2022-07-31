function createPhoneNumber(numbers){

    let noCommas = numbers.toString().replace(/,/g, '');
    
    let first = noCommas.slice(0,3);
    let second = noCommas.slice(3,6);
    let third = noCommas.slice(6,10);

    return `(${first}) ${second}-${third}`
    
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);