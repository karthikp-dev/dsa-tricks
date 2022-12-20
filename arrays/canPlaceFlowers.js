const canPlaceFlowers = (flowerbed, n) => {
  let previous;
  let next;
  let current;

  for (let i = 0; i < flowerbed.length; i++) {
    previous = flowerbed[i - 1];
    current = flowerbed[i];
    next = flowerbed[i + 1];
    // here we take advante of previous and next being falsy values when they are outside of the array or when they are equal to zero
    if (!previous && !current && !next) {
      flowerbed[i] = 1;
      n--;
      //early return optimization
      if (n === 0) return true;
    }
  }

  return n <= 0;
};

console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1));
