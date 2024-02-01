function fishbash(n) {
  for (let i = 1; i <= n; i++) {
    if (!(i % 15)) {
      console.log("fish bash");
    } else if (!(i % 5)) {
      console.log("bash");
    } else if (!(i % 3)) {
      console.log("fish");
    } else {
      console.log(i);
    }
  }
}

fishbash(30);