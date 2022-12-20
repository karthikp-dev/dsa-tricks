let findContentChildren = function (g, s) {
  let contentChildren = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let j = 0;
  s.forEach((element) => {
    if (element >= g[j]) {
      contentChildren++;
      j++;
    }
  });
  //   return contentChildren;
  console.log(contentChildren);
};

findContentChildren([1, 2, 3], [1, 1]);
