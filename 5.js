const input = require('./input/5')

console.log('PART 1');
const seatIDs = input.map(pass => {
  return getSeatID(pass);
});
console.log(
  Math.max(...seatIDs)
);

console.log('PART 2');
for (let i = Math.min(...seatIDs); i < Math.max(...seatIDs); i++) {
  if (!seatIDs.includes(i)) console.log(i);
}

function getSeatID(pass) {
  const parts = pass.split('');
  let minRow = 0;
  let maxRow = 127;
  let minSeat = 0;
  let maxSeat = 7;

  parts.forEach(part => {
    const x = (maxRow - minRow) / 2;
    const y = (maxSeat - minSeat) / 2;

    switch (part) {
      case 'F':
        maxRow = Math.floor(maxRow - x);
        break;
      case 'B':
        minRow = Math.ceil(minRow + x);
        break;
      case 'L':
        maxSeat = Math.floor(maxSeat - y);
        break;
      case 'R':
        minSeat = Math.ceil(minSeat + y);
        break;
    }
  });
  return minRow * 8 + minSeat;
}
