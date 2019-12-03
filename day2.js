const fs = require('fs');
const input = fs.readFileSync('./input/day2.txt', 'utf8').trim().split(',');

const add = (a, b) => {
  return a + b;
};

const multi = (a, b) => {
  return a * b;
}

const run = (noun, verb) => {
  const memory = [...input];
  memory[1] = noun.toString();
  memory[2] = verb.toString();
  let running = true;
  let index = 0;

  while (running) {
    const op = memory[index];
    const a = parseInt(memory[memory[index + 1]]);
    const b = parseInt(memory[memory[index + 2]]);
    const loc = memory[index + 3];

    switch (op) {
      case '1':
        memory[loc] = add(a, b);
        break;
      case '2':
        memory[loc] = multi(a, b);
        break;
      case '99':
      default:
        running = false;
        break;
    }

    index = index + 4;
  }

  return parseInt(memory[0]);
}

let found = false;
let noun = 12;
let verb;
const max = 99;

while (found == false) {
  verb = 0;
  for (let i = 0; i < 99; i++) {
    verb = i;

    if (run(noun, verb) === 19690720) {
      found = true;
      break;
    }
  }

  if (!found) {
    noun++;
  }
}

const answer = (100 * noun) + verb;

console.info('Answer: ', answer);
