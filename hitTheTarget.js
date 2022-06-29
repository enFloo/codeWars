const solution = mtrx => {
    let index = mtrx.map(a => a.indexOf(">"));
    console.log(index);

    let index2 = mtrx.map(e => e.indexOf("x"));
    console.log(index2);

    if(index > index2){
        console.log("hit");
    }else{
        console.log("miss");
    }
}



solution([ [' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], [' ', '>', ' ', 'x'], [' ', ' ', ' ', ' '] ]);




