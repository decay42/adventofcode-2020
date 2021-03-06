const input = require('./input/3')


console.log('PART 1');
let posX = 0;
let posY = 0;
let trees = 0;
while (posY < input.length) {
  if (input[posY][posX % 31] === '#') trees++
  posX += 3; posY += 1;
}
console.log(trees);

console.log('PART 2');
let r1d1 = 0;
let r3d1 = trees;
let r5d1 = 0;
let r7d1 = 0;
let r1d2 = 0;

let r5d1X = 0;
let r7d1X = 0;
let r1d2Y = 0;

posY = 0;
while (posY < input.length) {
  if (input[posY][posY % 31] === '#') r1d1++;
  if (input[posY][r5d1X % 31] === '#') r5d1++;
  if (input[posY][r7d1X % 31] === '#') r7d1++;
  if (r1d2Y < input.length && input[r1d2Y][posY % 31] === '#') r1d2++;
  r5d1X += 5;
  r7d1X += 7;
  r1d2Y += 2;
  posY++;
}

console.log(r1d1 * r3d1 * r5d1 * r7d1 * r1d2);