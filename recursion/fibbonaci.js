let fibonacciSeries = (n) => {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
};

console.log(fibonacciSeries(8));

let i = 0;
let recursiveFibonacciSeries = (n) => {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacciSeries(n - 1) + recursiveFibonacciSeries(n - 2);
};

console.log(recursiveFibonacciSeries(8));
