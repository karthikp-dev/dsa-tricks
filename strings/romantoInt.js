const romanToInt = (s) => {
  const romanHashMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let romanArray = s.split("");
  let intValue = 0;
  for (let i = 0; i < romanArray.length; i++) {
    if (romanHashMap[romanArray[i]] < romanHashMap[romanArray[i + 1]]) {
      intValue =
        intValue +
        (romanHashMap[romanArray[i + 1]] - romanHashMap[romanArray[i]]);
      i++;
    } else {
      intValue += romanHashMap[romanArray[i]];
    }
  }

  return intValue;
};

console.log(romanToInt("III"));
