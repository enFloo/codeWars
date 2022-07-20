function redistributeWealth(wealth) {

    let sum=wealth.reduce((a,b)=>a+b,0)/wealth.length
    console.log(sum);
    for(var i = 0; i < wealth.length; i++) {
     wealth[i] = sum;

   }
 }
redistributeWealth([23, 49, 50, 25])

