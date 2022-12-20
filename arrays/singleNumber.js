//Solution 1
var singleNumber = function (nums) {
  let hash = new Set();
  nums.forEach((n) => {
    if (!hash.has(n)) {
      hash.add(n);
    } else {
      hash.delete(n);
    }
  });
  //   console.log(hash.values().next());
  return hash.values().next().value;
};

// Solution 2
//https://www.youtube.com/watch?v=XzQSPg6LFyY
var singleNumber = function (nums) {
  var result = nums[0];
  for (var i = 1; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
};

console.log(singleNumber([1, 2, 3, 5, 2, 1, 3]));
