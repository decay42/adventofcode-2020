const input = require('./input/1');

console.log('PART 1');
let found = false;
for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] + input[j] === 2020) {
      console.log(input[i] * input[j]);
      found = true;
      break;
    }
  }
  if (found) break;
}

console.log(input.filter(i => input.some(j => i + j === 2020)).reduce((a, b) => a * b, 1));

console.log('PART 2');
found = false;
for (let i = 0; i < input.length - 2; i++) {
  for (let j = i + 1; j < input.length - 1; j++) {
    for (let k = j + 1; k < input.length; k++) {
      if (input[i] + input[j] + input[k] === 2020) {
        console.log(input[i] * input[j] * input[k]);
        found = true;
        break;
      }
    }
    if (found) break;
  }
  if (found) break;
}

console.log(input.filter(i => input.some(j => input.some(k => i + j + k === 2020))).reduce((a, b) => a * b, 1))