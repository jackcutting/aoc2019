const fs = require('fs');
const input = fs.readFileSync('./input/day3.txt', 'utf8').trim().split('\n');
// const input = ['R8,U5,L5,D3', 'U7,R6,D4,L4'];
// const input = ['R75,D30,R83,U83,L12,D49,R71,U7,L72', 'U62,R66,U55,R34,D71,R55,D58,R83'];
// const input = ['R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51', 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'];
const wireA = input[0].split(',');
const wireB = input[1].split(',');

const calcCoords = (wire) => {
  const board = [[0,0]];

  for (route of wire) {
    const next = [...board[board.length - 1]];
    const operand = (['R','U'].indexOf(route.substring(0, 1)) >= 0) ? '+' : '-';
    const axis = (['R','L'].indexOf(route.substring(0, 1)) >= 0) ? 0 : 1;

    for (let i = 0; i < parseInt(route.substring(1)); i++) {
      next[axis] = eval(next[axis] + ' ' + operand + ' ' + 1);
      board.push([...next])
    }
  }

  return board;
}

const boardA = calcCoords(wireA).map(value => value[0] + ',' + value[1]);
const boardB = calcCoords(wireB).map(value => value[0] + ',' + value[1]);

const intersects = boardA.filter(value => -1 !== boardB.indexOf(value));
intersects.shift();

let manhattanDistance = Infinity;

for (coords of intersects) {
  const xy = coords.split(',').map(value => Math.abs(parseInt(value)));
  const distance = xy[0] + xy[1];
  manhattanDistance = distance < manhattanDistance ? distance : manhattanDistance;
}

console.info('manhattanDistance', manhattanDistance);
