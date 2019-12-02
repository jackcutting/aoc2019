const fs = require('fs');
const input = fs.readFileSync('./input/day1.txt', 'utf8').trim().split('\n');

let fuelRequired = 0;

const calculateFuel = (mass) => {
  let fuel = Math.floor((mass / 3)) - 2;

  if (fuel > 0) {
    const additionalFuel = calculateFuel(fuel);
    if (additionalFuel > 0) {
      fuel = fuel + additionalFuel;
    }
  }

  return fuel;
};

for (mass of input) {
  fuelRequired = fuelRequired + calculateFuel(mass);
}

console.info(fuelRequired);
