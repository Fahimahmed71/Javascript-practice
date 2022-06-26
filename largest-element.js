function largestEl(num) {
  let large = num[0];
  for (let i = 0; i <= num.length; i++) {
    const element = num[i];

    if (large > element) {
      large = element;
    }
  }
  return large;
}

const arrPos = [9, 12, 75, 45, 19, 64];
const arrEl = largestEl(arrPos);

const arrNag = largestEl([-3, -61, -32]);

console.log(arrEl);
