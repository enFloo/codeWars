function fakeBin(x) {

 const arr = x.split('');

 for( i = 0; i < arr.length; i++) {
   if(arr[i] < 5){
     arr[i] = 0;
   }else {
      arr[i] = 1;
   }
 }

 const arr2 = arr.toString();
 const arr3 = arr2.join();
 return arr3
}

fakeBin('123456789')