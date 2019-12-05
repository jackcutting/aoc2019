const fs = require('fs');
const readline = require('readline');
const input = fs.readFileSync('./input/day5.txt', 'utf8').trim().split(',');

const add = (a, b) => {
  return (a + b).toString();
};

const multi = (a, b) => {
  return (a * b).toString();
}

const getParam = (memory, index, mode) => {
  switch (mode) {
    case '0':
      return parseInt(memory[memory[index]]);
    case '1':
      return parseInt(memory[index]);
    default:
      return undefined;
  }
}

const run = () => {
  const memory = [...input];
  let running = true;
  let index = 0;
  let answer = '';

  while (running) {
    let instruction = memory[index];
    let loc = memory[index + 3];
    let op = Math.abs(instruction);
    let modeA = '0';
    let modeB = '0';
    let modeC = '0';

    if (instruction.length > 2) {
      instruction = instruction.padStart(5, '0');
      op = Math.abs(instruction.substring((instruction.length - 2)));
      modeC = instruction.substring((instruction.length - 3), (instruction.length - 2));
      modeB = instruction.substring((instruction.length - 4), (instruction.length - 3));
      modeA = instruction.substring((instruction.length - 5), (instruction.length - 4));
    }

    const c = getParam(memory, (index + 1), modeC);
    const b = getParam(memory, (index + 2), modeB);
    const a = getParam(memory, (index + 3), modeA);

    let paramLength = 4;

    switch (op) {
      case 1:
        memory[loc] = add(c, b);
        break;
      case 2:
        memory[loc] = multi(c, b);
        break;
      case 3:
        loc = memory[index + 1];
        memory[loc] = '1';
        paramLength = 2;
        break;
      case 4:
        answer = answer + c;
        paramLength = 2;
        break;
      case 99:
      default:
        running = false;
        break;
    }

    index = index + paramLength;
  }

  return answer;
}

const answer = run();

console.info('Answer: ', answer);
