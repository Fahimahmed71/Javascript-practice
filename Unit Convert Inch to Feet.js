function inchToFeet(inch) {
  var feet = inch / 12;
  return feet;
}

var inches = 132;
var feet = inchToFeet(inches);

console.log("my inch is", feet);

function milesToKm(miles) {
  var km = miles * 1.61;
  return km;
}

var marathon = milesToKm(26.36);
console.log("marathon in km is", marathon);
