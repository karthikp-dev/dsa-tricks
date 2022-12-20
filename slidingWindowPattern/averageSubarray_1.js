let find_averages_of_subarrays = (p, arr) => {
  const result = [];
  let n = arr.length;
  let i = 0;
  while (i <= n - p) {
    let j = i;
    let sum = 0.0;
    while (j < i + p) {
      sum += arr[j];
      j++;
    }
    i++;
    result.push(sum / p);
  }

  return result;
};

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
// console.log(`Averages of subarrays of size K: ${result}`);

let usingSlidingWindow = (p, array) => {
  const result = [];
  let windowSum = 0.0,
    windowStart = 0,
    windowEnd = 0;
  while (windowEnd < array.length) {
    windowSum += array[windowEnd]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (windowEnd >= p - 1) {
      result.push(windowSum / p); // calculate the average
      windowSum -= array[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
    windowEnd++;
  }

  return result;
};

console.log(usingSlidingWindow(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]));
