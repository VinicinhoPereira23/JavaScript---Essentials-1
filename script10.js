let x = 5;
let y = 10;
let z = (x++ * --y) / 2 + (y % 3);
console.log(z)
// o resultado será de: 22.5
// sera 5 * 9 / 2 = 22.5
// o x continuará valendo 5 na equação.