function points(games) {
    let total = 0;

    for(i = 0; i < games.length; ++i){
        if(games[i][0] > games[i][2])
            total += 3;
        if(games[i][0] == games[i][2])
            total += 1;
    }
    return total;
        
}

  points(["3:1", "2:2", "0:1"]);