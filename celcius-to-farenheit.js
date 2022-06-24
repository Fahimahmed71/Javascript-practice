function celciusToFarenheit(celcius) {
  let farenheit = (celcius * 9) / 5 + 32;

  return farenheit;
}

const celciusToFarenheitEl = celciusToFarenheit(10);
console.log(celciusToFarenheitEl);
