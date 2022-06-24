function leapYear(year) {
  if (year % 4 == 0) {
    return true;
  }
  return false;
}

const myLeapYear = 2023;
const isMyLeapYear = leapYear(myLeapYear);

console.log(isMyLeapYear);
