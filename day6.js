const fs = require('fs');
let input = fs.readFileSync('./input/day6.txt', 'utf8');
input = input.trim().split('\n');

let answer = 0;

const getOrbitees = (orbitor) => {
  let orbitees = 0;

  const orbitee = input.filter((item) => {
    return item.endsWith(`)${orbitor}`);
  }).toString();

  if (orbitee) {
    orbitees = 1 + getOrbitees(orbitee.substring(0, orbitee.indexOf(')')));
  }

  return orbitees;
}

for (orbit of input) {
  answer += getOrbitees(orbit.split(')')[1]);
}

console.info('Answer:', answer);
