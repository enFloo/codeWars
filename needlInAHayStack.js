function findNeedle(haystack) {
    let needle = 0;

    for(let i = 0; i <= haystack.length; i++){
        if(haystack[i] === 'needle'){
            needle = haystack.indexOf('needle');
        }

    }
   return needle;
  }

  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);