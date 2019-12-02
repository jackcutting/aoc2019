const fs = require('fs');
const input = fs.readFileSync('./input/day2.txt', 'utf8').trim().split(',');

input[1] = '12';
input[2] = '2';

const add = (a, b) => {
  return a + b;
};

const multi = (a, b) => {
  return a * b;
}

let running = true;
let index = 0;

while (running) {
  const op = input[index];
  const a = parseInt(input[input[index + 1]]);
  const b = parseInt(input[input[index + 2]]);
  const loc = input[index + 3];

  switch (op) {
    case '1':
      input[loc] = add(a, b);
      break;
    case '2':
      input[loc] = multi(a, b);
      break;
    case '99':
    default:
      running = false;
      break;
  }

  index = index + 4;
}

console.info('Answer: ', input[0]);
