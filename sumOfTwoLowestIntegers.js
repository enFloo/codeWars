function sumTwoSmallestNumbers(numbers) {  

    numbers.sort((a, b) => a-b);

    let z = numbers[0] + numbers[1];
    
    return z;
}

sumTwoSmallestNumbers([23, 122, 56, 232, 940]);

