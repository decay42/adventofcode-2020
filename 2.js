const input = require('./input/2')

console.log('PART 1');
console.log(
  input.filter(i => {
    const [amount, literal] = i.regex.split(' ');
    const [min, max] = amount.split('-')
    const length = i.value.split('').filter(letter => letter === literal).length;
    return (length >= min && length <= max);
  }).length
);

console.log('PART 2');
console.log(
  input.filter(i => {
    const [positions, literal] = i.regex.split(' ');
    const [first, second] = positions.split('-')

    if (
      (i.value[first - 1] === literal && i.value[second - 1] !== literal) ||
      (i.value[first - 1] !== literal && i.value[second - 1] === literal)
    ) {
      return true;
    }
    return false;
  }).length
);
