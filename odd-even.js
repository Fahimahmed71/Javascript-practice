// const num = 5;

// const remain = num % 2;
// console.log(remain == 0);

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

const number = 1234;
const myNumber = isEven(number);
console.log(myNumber);
