const closestMultiple10 = num => {
    let diff = (Math.ceil(num/10) *10) - num;

    let subtract = 0;

    if (diff <= 5){
        return Math.ceil(num/10) * 10;
    }else{
        subtract = 10 - diff;

        return num - subtract;
    }
};

closestMultiple10(34);
