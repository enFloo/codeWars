function digitize(n) {
    let array = Array.from(String(n), Number);

    let reversed = array.reverse();

    console.log(reversed);
  }

  digitize(12345);