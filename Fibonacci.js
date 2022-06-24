// Fibonacci

// Mathod -1
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144;
nth = [n - 1] + [n - 2];

Mathod - 1;

let fibo = [0, 1];

for (let i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.table(fibo);

// Mathod -2

function faboEl(num) {
  if (typeof num != "number") {
    return "Give a number";
  }

  if (num < 0) {
    return "Add a posative number";
  }

  let fibo = [0, 1];

  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

console.table(faboEl(55));
