function divCon(x){
    let stringTotal = 0;
    let numberTotal = 0;

    for(let i = 0; i < x.length; i++){
        if(typeof x[i] === 'string'){
            //turn sting into number
            stringTotal += +x[i]
            
        }else{
            numberTotal += x[i]
        }
        
    }
    return numberTotal - stringTotal
}

